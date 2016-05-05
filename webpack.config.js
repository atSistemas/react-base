const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var buildPath = path.resolve(__dirname, 'dist');
var mainPath = path.resolve(__dirname, 'src', 'client.js');

module.exports = {

  devtool: '#inline-source-map',

  entry: [
    'webpack-hot-middleware/client',
    'webpack/hot/dev-server',
    './src/client.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    alias: {},
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname,
      query: {
        presets: ["es2015", "stage-0", "react"],
      }
    }, {
      test: /\.css$/,
      loader: "style!css",
    }, ]
  }
};
