const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publichPath : '/'
  },
  proxy: {
   "*": "http://localhost:3000"
 },
  devServer: {
    inLine: true,
    contentBase: './build'
  },
  module: {
    loaders: [
      { test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react']
        }
      }
    ]
  },
};
