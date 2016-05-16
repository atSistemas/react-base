import path from 'path'
import webpack from 'webpack'
import { devPlugins, devEntries } from './webpack-dev-config'
import { prodPlugins, prodEntries } from './webpack-prod-config'

const mainPath = path.resolve(__dirname, '..')
const buildPath = path.resolve(__dirname, '..', 'dist')
const ENV = process.env.NODE_ENV || 'development'
const plugins = (ENV === 'development') ? devPlugins: prodPlugins
const entries = (ENV === 'development') ? devEntries: prodEntries

var config = {

  devtool: 'eval',

  entry: entries,

  plugins: plugins,

  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/static/'
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
