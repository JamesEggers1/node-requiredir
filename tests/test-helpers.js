"use strict";

var _fs = require("fs")
	, _os = require("os")
	, _rimraf = require("rimraf")
	, _path = require("path");

var eol = _os.platform
  ? ('win32' == _os.platform() ? '\r\n' : '\n')
  : '\n';

var index = [
    ''
  , 'exports.up = function(){'
  , '  console.log("up")'
  , '};'
].join(eol);

var createTestFiles = function(path, count){
	for (var i = 0; i <  count; i++){
		_fs.writeFileSync(_path.join(path, '/mod' + i + '.js'), index);
	}
};

exports.createHiddenTestFiles = function(path){
	path = _path.resolve(_path.dirname(module.parent.filename), path);
	_fs.writeFileSync(_path.join(path, '/.hiddenFile.js'), index);
};

exports.setup = function(path, count){
	path = _path.resolve(_path.dirname(module.parent.filename), path);
	_fs.mkdirSync(path);
	createTestFiles(path, count);
};

exports.teardown = function(path){
	path = _path.resolve(_path.dirname(module.parent.filename), path);
	_rimraf.sync(path);
};