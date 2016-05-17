import path from 'path'
import webpack from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'
const clientPath = path.resolve(__dirname, '..', 'src', 'client.js')

export const prodPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({compressor: { warnings: false }}),
  new CopyWebpackPlugin([{ from: './src/assets', to: 'assets' }])
]

export const prodEntries = [
  clientPath
]
