import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import {symbols, color} from '../shared/console';

const config = require('../../webpack/webpack.config.babel');
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
  headers: { 'Access-Control-Allow-Origin': '*' }
};

const bundleStart = Date.now();
console.log('[BASE] Bundling...');


compiler.plugin('done', function() {
  console.log('[BASE] ' + color('success', symbols.ok) + ' Bundled project in ' + (Date.now() - bundleStart) + 'ms!');
});

const applyDevMiddleware = function(){
  return [
    webpackHotMiddleware(compiler),
    webpackDevMiddleware(compiler, serverOptions)
  ];
};

module.exports = applyDevMiddleware;
