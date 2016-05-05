const webpack = require('webpack')
const config = require('../webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

var options = {
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: config.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true}
};

var bundleStart = null

console.log('[BASE] Bundling...')

export const Compiler = webpack(config)
export const WebpackDevMiddleware = webpackDevMiddleware(Compiler, options)
export const WebpackHotMiddleware = webpackHotMiddleware(Compiler)

Compiler.plugin('done', function() {
    console.log('[BASE] Bundled proyect in ' + (Date.now() - bundleStart) + 'ms!');
});
