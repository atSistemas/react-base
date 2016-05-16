import path from 'path'
import webpack from 'webpack'

const config = require('../webpack/webpack.config.babel')
const compiler = webpack(config)

var bundleStart = Date.now()
console.log('[BASE] Bundling production proyect...')

compiler.plugin('done', function() {
  console.log('[BASE] Bundled production proyect in ' + (Date.now() - bundleStart) + 'ms!')
})

export function applyProdMiddleware(){
  return []
}
