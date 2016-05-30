require('babel-core/register');
var ENV = require('../src/shared/env');
require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]-[hash:base64:4]',
  mode: 'local',
  rootDir: './src'
});
console.log('[BASE] Starting '+ ENV.default +' enviroment...');
require("./server.js");
