const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");
const { parseXml } = require("citeproc");
const uglify = require("uglify-js");

const ROOT = path.resolve(__dirname, "..");
const PACKAGES_DIR = path.resolve(ROOT, "packages");
const TEMPLATE_DIR = path.resolve(ROOT, "templates");

function Builder({ filepath, name, scope = null }) {
  this.scope = scope;
  this.filePath = filepath;
  this.name = name;

  // parse the xml into json using citeproc
  this.data = parseXml(fs.readFileSync(this.filePath).toString());

  // extract metadata from the data
  this.info = this.data.children.find(c => c.name === "info");
  this.type = this.data.name;
  this.packageName = (this.type + "-" + this.name).toLowerCase();
  this.scopedPackageName =
    (this.scope ? "@" + this.scope + "/" : "") + this.packageName;
  this.title = this.getTitle();
  this.updated = this.getUpdated();
  this.link = this.getLink();
  this.authors = this.getPeople("author");
  this.contributors = this.getPeople("contributor");
  this.translators = this.getPeople("translator");
}

Builder.prototype.getTitle = function() {
  const res = this.info.children.find(c => c.name === "title");
  return res ? res.children[0] : this.name;
};
Builder.prototype.getLink = function() {
  const link = this.info.children.find(c => c.name === "link");
  return link ? link.attrs.href : "";
};
Builder.prototype.getPeople = function(type) {
  const people = this.info.children.filter(c => c.name === type);
  return people.map(c => c.children.find(p => p.name === "name").children[0]);
};
Builder.prototype.getUpdated = function() {
  const updated = this.info.children.find(c => c.name === "updated")
    .children[0];
  return new Date(Date.parse(updated)).toLocaleDateString();
};

Builder.prototype.buildIndexJs = function() {
  code = "module.exports=" + JSON.stringify(this.data);
  return uglify.minify(code).code;
};
Builder.prototype.readme = Handlebars.compile(
  fs.readFileSync(path.join(TEMPLATE_DIR, "README.md.hbs")).toString()
);
Builder.prototype.package = Handlebars.compile(
  fs.readFileSync(path.join(TEMPLATE_DIR, "package.json.hbs")).toString()
);
Builder.prototype.build = function(dest = PACKAGES_DIR) {
  const packageDir = path.join(dest, this.packageName);

  if (!fs.existsSync(packageDir)) {
    fs.mkdirSync(packageDir);
    fs.writeFileSync(path.join(packageDir, "package.json"), this.package(this));
  }
  
  fs.writeFileSync(path.join(packageDir, "README.md"), this.readme(this));
  fs.writeFileSync(path.join(packageDir, "index.js"), this.buildIndexJs());
  return dest;
};

module.exports = Builder;
