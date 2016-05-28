require('babel-core/register');
var ENV = require('../app/shared/env');
require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
});
console.log('[BASE] Starting '+ ENV.default +' enviroment...');
var server = require("./server.js");
