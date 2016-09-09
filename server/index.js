require('babel-core/register');
require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]-[hash:base64:4]',
  mode: 'local',
  rootDir: './'
});

const base = require('../src/base').default;

base.console.info(`Starting ${base.env} enviroment...`);
require("./server");
