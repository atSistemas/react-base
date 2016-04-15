'use strict';

var fs = require('fs');
var dir = process.cwd()+'/.react-base/conf/logo.txt';
console.log(fs.readFileSync(dir, 'utf-8'));
