import path from 'path'
import webpack from 'webpack'
const clientPath = path.resolve(__dirname, '..', 'src', 'client/')

export const devPlugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.HotModuleReplacementPlugin()
]

export const devEntries = [
  clientPath,
  'webpack/hot/dev-server',
  'webpack-hot-middleware/client'
]
