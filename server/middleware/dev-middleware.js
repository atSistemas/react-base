import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import base from '../../src/base/';

const config = require('../../webpack/index.babel.js');

const compiler = webpack(config);

const serverOptions = {
  hot: true,
  lazy: false,
  quiet: true,
  watch: true,
  noInfo: true,
  inline: true,
  progress: false,
  stats: { colors: true },
  publicPath: config.output.publicPath,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With , Accept-Language, Content-type, Authorization'
  }
};

let bundleStart = Date.now();

compiler.plugin("compile", function() {
  bundleStart = Date.now();
});

compiler.plugin('done', function() {
  base.console.success(`Bundled project in ${Date.now() - bundleStart} ms!`);
});

const applyDevMiddleware = function() {
  return [
    webpackHotMiddleware(compiler, { log:false, noInfo: true, quiet: true}),
    webpackDevMiddleware(compiler, serverOptions),
  ];
};

module.exports = applyDevMiddleware;
