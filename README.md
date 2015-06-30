requiredir [![Build Status](https://secure.travis-ci.org/JamesEggers1/node-requiredir.png)](http://travis-ci.org/JamesEggers1/node-requiredir)
============

The requiredir project provides a simple module that, when passed a directory, will import in all node modules into an object or array to be used by other modules.  Very useful for dynamically generated scripts or scripts of similar purpose and definition (e.g. database migration scripts, routing modules, etc.).

## Installation ##

    npm install requiredir

## Testing ##

The requiredir module has unit tests built around it than can be used to verify the package before usage.  The tests are written with the Mocha and Should modules and running the below command will import such.  

     npm test requiredir

requiredir's tests are compatible with Node.js 0.6 and higher. 

## Usage ##

Once the package has been installed using `npm`, using the module is very simple as shown below.

```javascript
var requiredir = require("requiredir")
    , imports = requiredir("./routes");

console.log("Number of imports: " + imports.length);
console.log("Modules can be accessed as properties to the imports variable: " + imports.myRoutes.name);
console.log("Modules can also be accessed by Array to access them in order of importing: " + imports.toArray().length);
```

## Contributors ##
* James Eggers
* [Joshua Poehls](https://github.com/jpoehls)


## License ##

(MIT) 

Copyright (c) 2015 James Eggers

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
