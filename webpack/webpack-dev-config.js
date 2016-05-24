import path from 'path'
import webpack from 'webpack'

const mainPath = path.resolve(__dirname, '..')
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

export const devLoaders = [
  { test: /\.js?$/,loader: 'babel',exclude: /node_modules/,include: mainPath, query: { presets: ["react-hmre", "es2015", "stage-0", "react"] }},
  { test: /\.css$/,loader: "style!css"}
]
