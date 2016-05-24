import path from 'path'
import webpack from 'webpack'
import copyWebpackPlugin from 'copy-webpack-plugin'

const clientPath = path.resolve(__dirname, '..', 'src', 'client/')

export const prodPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
  new copyWebpackPlugin([{ from: './src/assets', to: 'assets' }]),
  new webpack.optimize.UglifyJsPlugin({compressor: { warnings: false }})
]

export const prodEntries = {
  app: clientPath,
  common: [
    'react',
    'redux',
    'react-dom',
    'react-redux',
    'react-router',
    'isomorphic-fetch'
  ]
}
