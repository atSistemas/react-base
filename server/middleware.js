import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
const config = require('../webpack.config.babel')
const compiler = webpack(config)

var options = {
  hot: true,
  lazy: false,
  quiet: true,
  noInfo: true,
  inline: true,
  stats: { colors: true },
  publicPath: config.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' }
};

var bundleStart = Date.now()
console.log('[BASE] Bundling proyect...')

compiler.plugin('done', function() {
  console.log('[BASE] Bundled proyect in ' + (Date.now() - bundleStart) + 'ms!');
});

export const WebpackDevMiddleware = webpackDevMiddleware(compiler, options)
export const WebpackHotMiddleware = webpackHotMiddleware(compiler)
