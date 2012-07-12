"use strict";
var _compat = require("./node06compat")
	, _fs = require("fs")
	, _path = require("path");
	
module.exports = (function(){

	var _verifyDirectory = function(path) {
		var stats; 

		if (typeof path === "undefined"
			|| (typeof path === "string" && path.trim().length === 0)) {
			throw new Error("The path must be provided when instantiating the object.");
		}

		try {
			stats = _fs.statSync(path);
		} catch (e) {
			throw new Error("The directory path does not exist.");
		}

		if (!stats.isDirectory()){
			throw new Error("The path provided is not a directory.");
		}
	};

	var _importFiles = function(path, files){
		var moduleList = []
			, relativePath = _path.resolve(process.cwd() + "/" + path)
			, trimmedName
			, module
			, obj = {};

		files.forEach(function (element, index, array){
			if (_fs.lstatSync(path + "/" + element).isFile() && element.substring(0,1) !== "."){
				trimmedName =  element.substring(0, (element.length - 3));
				module = require(relativePath + "/" + trimmedName);			
				moduleList.push(module);
				obj[trimmedName] = module;
			}
		});

		obj.length = moduleList.length;
		obj.toArray = function(){return moduleList;};

		return obj;
	};
	
	return function(path){
		_verifyDirectory(path);

		var fileList = []
			, modules = [];

		var files = _fs.readdirSync(path);

		return _importFiles(path, files);
	};
}());