import path from 'path'
import webpack from 'webpack'

const config = require('../webpack/webpack.config.babel')
const compiler = webpack(config)

var bundleStart = Date.now()

compiler.plugin('done', function() {
  console.log('[BASE] Bundled project in ' + (Date.now() - bundleStart) + 'ms!')
})

export function applyProdMiddleware(){
  return []
}
