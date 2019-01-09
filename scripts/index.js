const Builder = require("./builder");
const config = require("../config.json");

config.packages.forEach(fp => new Builder(fp).build());
