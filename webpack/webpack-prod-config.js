import path from 'path'
import webpack from 'webpack'
const clientPath = path.resolve(__dirname, '..', 'src', 'client.js')

export const prodPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({compressor: { warnings: false }})
]

export const prodEntries = [
  clientPath
]
