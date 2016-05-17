import path from 'path'
import webpack from 'webpack'
import copyWebpackPlugin from 'copy-webpack-plugin'

const clientPath = path.resolve(__dirname, '..', 'src', 'client.js')

export const prodPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({compressor: { warnings: false }}),
  new webpack.optimize.CommonsChunkPlugin('common', 'common.js'), 
  new copyWebpackPlugin([{ from: './src/assets', to: 'assets' }])
]

export const prodEntries = {
  app: clientPath,
  common: [ 
    'isomorphic-fetch', 
    'react', 
    'react-dom', 
    'react-redux', 
    'react-router', 
    'redux'
  ]
}
