const path = require('path');
const webpack = require('webpack');

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
      { test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react']
        }
      }
    ]
  },
};
