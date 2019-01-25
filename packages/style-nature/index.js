module.exports={name:"style",attrs:{xmlns:"http://purl.org/net/xbiblio/csl",class:"in-text",version:"1.0","demote-non-dropping-particle":"sort-only","default-locale":"en-GB"},children:[{name:"info",attrs:{},children:[{name:"title",attrs:{},children:["Nature"]},{name:"id",attrs:{},children:["http://www.zotero.org/styles/nature"]},{name:"link",attrs:{href:"http://www.zotero.org/styles/nature",rel:"self"},children:[]},{name:"link",attrs:{href:"http://www.nature.com/nature/authors/gta/index.html#a5.4",rel:"documentation"},children:[]},{name:"link",attrs:{href:"http://www.nature.com/srep/publish/guidelines#references",rel:"documentation"},children:[]},{name:"author",attrs:{},children:[{name:"name",attrs:{},children:["Michael Berkowitz"]},{name:"email",attrs:{},children:["mberkowi@gmu.edu"]}]},{name:"category",attrs:{"citation-format":"numeric"},children:[]},{name:"category",attrs:{field:"science"},children:[]},{name:"category",attrs:{field:"generic-base"},children:[]},{name:"issn",attrs:{},children:["0028-0836"]},{name:"eissn",attrs:{},children:["1476-4687"]},{name:"updated",attrs:{},children:["2018-10-24T14:53:43+00:00"]},{name:"rights",attrs:{license:"http://creativecommons.org/licenses/by-sa/3.0/"},children:["This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License"]}]},{name:"macro",attrs:{name:"title"},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{type:"bill book graphic legal_case legislation motion_picture report song",match:"any"},children:[{name:"text",attrs:{variable:"title","font-style":"italic"},children:[]}]},{name:"else",attrs:{},children:[{name:"text",attrs:{variable:"title"},children:[]}]}]}]},{name:"macro",attrs:{name:"author"},children:[{name:"names",attrs:{variable:"author"},children:[{name:"name",attrs:{"sort-separator":", ",delimiter:", ",and:"symbol","initialize-with":". ","delimiter-precedes-last":"never","name-as-sort-order":"all"},children:[]},{name:"label",attrs:{form:"short",prefix:", "},children:[]},{name:"et-al",attrs:{"font-style":"italic"},children:[]}]}]},{name:"macro",attrs:{name:"access"},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{variable:"volume"},children:[]},{name:"else-if",attrs:{variable:"DOI"},children:[{name:"text",attrs:{variable:"DOI",prefix:"doi:"},children:[]}]},{name:"else-if",attrs:{type:"webpage",variable:"URL",match:"all"},children:[{name:"text",attrs:{term:"available at","text-case":"capitalize-first",suffix:": "},children:[]},{name:"text",attrs:{variable:"URL",suffix:". "},children:[]},{name:"group",attrs:{prefix:"(",suffix:")",delimiter:": "},children:[{name:"text",attrs:{term:"accessed","text-case":"capitalize-first"},children:[]},{name:"date",attrs:{variable:"accessed"},children:[{name:"date-part",attrs:{name:"day",suffix:" ",form:"ordinal"},children:[]},{name:"date-part",attrs:{name:"month",suffix:" "},children:[]},{name:"date-part",attrs:{name:"year"},children:[]}]}]}]}]}]},{name:"macro",attrs:{name:"issuance"},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{type:"bill book graphic legal_case legislation motion_picture report song thesis chapter paper-conference",match:"any"},children:[{name:"group",attrs:{delimiter:", ",prefix:"(",suffix:")."},children:[{name:"text",attrs:{variable:"publisher",form:"long"},children:[]},{name:"date",attrs:{variable:"issued"},children:[{name:"date-part",attrs:{name:"year"},children:[]}]}]}]},{name:"else",attrs:{},children:[{name:"date",attrs:{prefix:"(",suffix:").",variable:"issued"},children:[{name:"date-part",attrs:{name:"year"},children:[]}]}]}]}]},{name:"macro",attrs:{name:"container-title"},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{type:"article-journal"},children:[{name:"text",attrs:{variable:"container-title","font-style":"italic",form:"short"},children:[]}]},{name:"else",attrs:{},children:[{name:"text",attrs:{variable:"container-title","font-style":"italic"},children:[]}]}]}]},{name:"macro",attrs:{name:"editor"},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{type:"chapter paper-conference",match:"any"},children:[{name:"names",attrs:{variable:"editor",prefix:"(",suffix:")"},children:[{name:"label",attrs:{form:"short",suffix:" "},children:[]},{name:"name",attrs:{and:"symbol","delimiter-precedes-last":"never","initialize-with":". ","name-as-sort-order":"all"},children:[]}]}]}]}]},{name:"citation",attrs:{collapse:"citation-number"},children:[{name:"sort",attrs:{},children:[{name:"key",attrs:{variable:"citation-number"},children:[]}]},{name:"layout",attrs:{"vertical-align":"sup",delimiter:","},children:[{name:"text",attrs:{variable:"citation-number"},children:[]}]}]},{name:"bibliography",attrs:{"et-al-min":"6","et-al-use-first":"1","second-field-align":"flush","entry-spacing":"0","line-spacing":"2"},children:[{name:"layout",attrs:{},children:[{name:"text",attrs:{variable:"citation-number",suffix:"."},children:[]},{name:"group",attrs:{delimiter:" "},children:[{name:"text",attrs:{macro:"author",suffix:"."},children:[]},{name:"text",attrs:{macro:"title",suffix:"."},children:[]},{name:"choose",attrs:{},children:[{name:"if",attrs:{type:"chapter paper-conference",match:"any"},children:[{name:"text",attrs:{term:"in"},children:[]}]}]},{name:"text",attrs:{macro:"container-title"},children:[]},{name:"text",attrs:{macro:"editor"},children:[]},{name:"text",attrs:{variable:"volume","font-weight":"bold",suffix:","},children:[]},{name:"text",attrs:{variable:"page"},children:[]},{name:"text",attrs:{macro:"issuance"},children:[]},{name:"text",attrs:{macro:"access"},children:[]}]}]}]}]};