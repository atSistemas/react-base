require('babel-core/register');
const ENV = require('../src/base/shared/Env');

require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]-[hash:base64:4]',
  mode: 'local',
  rootDir: './src/app'
});

console.log('[BASE] Starting '+ ENV.default +' enviroment...');
require("./server");
