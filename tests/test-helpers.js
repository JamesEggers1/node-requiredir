"use strict";

var _fs = require("fs")
	, _os = require('os')
	, _rimraf = require("rimraf");

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
		_fs.writeFileSync(path + '/mod' + i + '.js', index);
	}
};

exports.setup = function(path, count){
	_fs.mkdirSync(path);
	createTestFiles(path, count);
};

exports.teardown = function(path){
	_rimraf.sync(path);
};