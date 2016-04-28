const path = require('path');
const Webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var buildPath = path.resolve(__dirname, '../public', '../dist/');
var mainPath = path.resolve(__dirname, '../src/main.js');



module.exports = {
  devtool: 'inline-source-map',
  entry: [
    mainPath,
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    filename: 'bundle.js',
    publichPath : '../dist/',
    path: buildPath
  },
  /*devServer: {
    inLine: true,
    contentBase: './build',
    historyApiFallback: true
  },*/
  module: {
    loaders: [
      { test: /.js?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react', 'stage-1']}},
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ],
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
};
