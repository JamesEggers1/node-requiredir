"use strict";
var _compat = require("./node06compat")
	, _fs = require("fs")
	, _path = require("path");
	
module.exports = (function(){

	var _verifyAndResolveDirectory = function(path) {
		var stats; 

		if (typeof path === "undefined"
			|| (typeof path === "string" && path.trim().length === 0)) {
			throw new Error("The path must be provided when instantiating the object.");
		}

		// Resolve the given require path relative to the parent module's directory.
		// This way the user can provide paths that are relative to themselves.
		path = _path.resolve(_path.dirname(module.parent.filename), path);

		try {
			stats = _fs.statSync(path);
		} catch (e) {
			throw new Error("The directory path does not exist. [" + path + "]");
		}

		if (!stats.isDirectory()){
			throw new Error("The path provided is not a directory. [" + path + "]");
		}

		return path;
	};

	var _importFiles = function(path, files){

		var moduleList = []
			, trimmedName
			, module
			, obj = {};

		files.forEach(function (element, index, array){
			// Require each file, skipping dotfiles.
			if (_fs.lstatSync(_path.join(path, element)).isFile() && element.substring(0,1) !== "."){
				trimmedName = _path.basename(element, _path.extname(element));
				module = require(_path.join(path, trimmedName));			
				moduleList.push(module);
				obj[trimmedName] = module;
			}
		});

		obj.length = moduleList.length;
		obj.toArray = function(){return moduleList;};

		return obj;
	};
	
	return function(path){

		path = _verifyAndResolveDirectory(path);

		var fileList = []
			, modules = [];

		var files = _fs.readdirSync(path);

		return _importFiles(path, files);
	};
}());