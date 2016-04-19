const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: ['./src/main.js'],
  output: {
    filename: 'bundle.js',
    publichPath : '/build/',
    path: path.join(__dirname, 'build')
  },
  devServer: {
    inLine: true,
    contentBase: './build',
    historyApiFallback: true
  },
  module: {
    loaders: [
      { test: /.js?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react']}},
      {
        test: /\.css$/i,
        loader: ExtractTextPlugin.extract('style',
          `css?modules&localIdentName=[name]_[local]__[hash:base64:5]!postcss`),
      }
    ]
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ],
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
};
