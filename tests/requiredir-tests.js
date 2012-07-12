"use strict";
var _mocha = require("mocha")
	, _should = require("should")
	, _helpers = require("./test-helpers")
	, requiredir = require("../src/requiredir")
	, _path = require("path");
	
describe("requiredir.js", function(){
	describe("Instantiation", function(){
		
		it("should throw an exception if a path is not provided", function(){
			(function(){requiredir();}).should.throw("The path must be provided when instantiating the object.");
		});
		
		it("should throw an exception if the path is empty", function(){
			(function(){requiredir("");}).should.throw("The path must be provided when instantiating the object.");
		});
		
		it("should throw an exception if the path is only whitespace", function(){
			(function(){requiredir("    ");}).should.throw("The path must be provided when instantiating the object.");
		});
		
		it("should throw an exception if the path does not exist.", function(){
			var pathToTest = "./doesnotexist";
			(function(){requiredir(pathToTest);}).should.throw("The directory path does not exist. [" + _path.resolve(__dirname, pathToTest) + "]");
		});
		
		it("should throw an exception if the path is not a directory.", function(){
			var pathToTest = "../LICENSE";
			(function(){requiredir(pathToTest);}).should.throw("The path provided is not a directory. [" + _path.resolve(__dirname, pathToTest) + "]");
		});
	});
	
	describe("Reading Files", function(){
		var path = "tmp"
			, count = 3;
			
		beforeEach(function(done){
			_helpers.setup(path, count);
			done();
		});
	
		afterEach(function(done){
			_helpers.teardown(path);
			done();
		});
	
		it("should import all modules from the filenames from the directory.", function(){
			var modules = requiredir(path);
			modules.length.should.equal(count);
			(typeof modules.mod0 === "object").should.be.true;
			(typeof modules.mod1 === "object").should.be.true;
			(typeof modules.mod2 === "object").should.be.true;
		});
		
		it("should provide a toArray() function to access each module by index instead of name.", function(){
			var modules = requiredir(path)
				, modArray = modules.toArray();
				
			modArray.length.should.equal(count);
			(typeof modArray[0] === "object").should.be.true;
			(typeof modArray[1] === "object").should.be.true;
			(typeof modArray[2] === "object").should.be.true;
		});
		
		it("should not import hidden files - file names starting with a '.'.", function(){
			_helpers.createHiddenTestFiles(path);
			var modules = requiredir(path);
			modules.length.should.equal(count);
			(typeof modules.mod0 === "object").should.be.true;
			(typeof modules.mod1 === "object").should.be.true;
			(typeof modules.mod2 === "object").should.be.true;
		});
	});
});