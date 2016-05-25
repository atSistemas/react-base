import path from 'path';
import { devPlugins, devEntries, devLoaders } from './webpack-dev-config';
import { prodPlugins, prodEntries, prodLoaders } from './webpack-prod-config';
import ENV from '../src/shared/env';

const buildPath = path.resolve(__dirname, '..', 'dist');
const plugins = (ENV === 'development') ? devPlugins: prodPlugins;
const entries = (ENV === 'development') ? devEntries: prodEntries;
const loaders= (ENV === 'development') ? devLoaders: prodLoaders;

const config = {

  devtool: 'eval',

  entry: entries,

  plugins: plugins,

  module: {
    loaders: loaders
  },

  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/'
  },

  resolve: {
    alias: {},
    extensions: ['', '.js', '.jsx']
  }

};

module.exports = config;
