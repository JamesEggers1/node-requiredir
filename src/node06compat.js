var fs = require("fs")
	, path = require("path");

if (typeof fs.exists === "undefined") {fs.exists = path.exists;}
if (typeof fs.existsSync === "undefined") {fs.existsSync = path.existsSync;}