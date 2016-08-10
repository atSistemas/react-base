'use strict';

var fs = require('fs');
var dir = process.cwd()+'/src/base/conf/.react-base/logo.txt';
console.log(fs.readFileSync(dir, 'utf-8'));
