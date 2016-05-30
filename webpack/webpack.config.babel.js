import path from 'path';
import getEnvConfig from './env-config';
import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';
import functions from 'postcss-functions';

const envConfig = getEnvConfig();
const buildPath = path.resolve(__dirname, '..', 'dist');

const webpackConfig = {

  devtool: 'eval',

  entry: envConfig.entries,

  context: envConfig.context,

  plugins: envConfig.plugins,

  module: {
    loaders: envConfig.loaders
  },

  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    alias: {
      '#src': path.join(__dirname, '../src'),
      '#css': path.join(__dirname, '../src/styles'),
      '#components': path.join(__dirname, '../src/components'),
      '#containers': path.join(__dirname, '../src/containers'),
    }
  },

  postcss: function (webpack) {
   return [
     require("postcss-import")({ addDependencyTo: webpack }),
     require("postcss-url")(),
     require("postcss-cssnext")(),
     require("postcss-reporter")()
   ]
 }
};

module.exports = webpackConfig;
