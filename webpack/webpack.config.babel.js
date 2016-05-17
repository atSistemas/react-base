import path from 'path'
import webpack from 'webpack'
import { devPlugins, devEntries } from './webpack-dev-config'
import { prodPlugins, prodEntries } from './webpack-prod-config'
import ENV from '../src/shared/env'

const mainPath = path.resolve(__dirname, '..')
const buildPath = path.resolve(__dirname, '..', 'dist')
const plugins = (ENV === 'development') ? devPlugins: prodPlugins
const entries = (ENV === 'development') ? devEntries: prodEntries

var config = {

  devtool: 'eval',

  entry: entries,

  plugins: plugins,

  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/'
  },

  resolve: {
    alias: {},
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: mainPath,
      query: { presets: ["es2015", "stage-0", "react"] }
    },
    {
      test: /\.css$/,
      loader: "style!css"
    }]
  },
};

module.exports = config;
