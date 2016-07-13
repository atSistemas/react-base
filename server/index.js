require('babel-core/register');
const ENV = require('../app/shared/Env');
require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]-[hash:base64:4]',
  mode: 'local',
  rootDir: './app'
});
require("./server.js");
console.log(`[BASE] Starting ${ENV.default} enviroment...`);