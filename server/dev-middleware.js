import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const config = require('../webpack/webpack.config.babel')
const compiler = webpack(config)

const serverOptions = {
  hot: true,
  lazy: false,
  quiet: true,
  noInfo: true,
  inline: true,
  progress: false,
  stats: { colors: true },
  publicPath: config.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' }
}

const bundleStart = Date.now()
console.log('[BASE] Bundling...')


compiler.plugin('done', function() {
  console.log('[BASE] Bundled project in ' + (Date.now() - bundleStart) + 'ms!')
})

export function applyDevMiddleware(){
  return [
    webpackHotMiddleware(compiler),
    webpackDevMiddleware(compiler, serverOptions)
  ]
}
