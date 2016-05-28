import path from 'path';
import getEnvConfig from './env-config';
import autoprefixer from 'autoprefixer';
import precss from 'precss';
import nested from 'postcss-nested';
import functions from 'postcss-functions';

const envConfig = getEnvConfig();
const buildPath = path.resolve(__dirname, '..', 'dist');

const webpackConfig = {

  devtool: 'eval',

  entry: envConfig.entries,

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
      '#app': path.join(__dirname, '../app'),
      '#css': path.join(__dirname, '../app/styles'),
      '#components': path.join(__dirname, '../app/components'),
      '#containers': path.join(__dirname, '../app/containers'),
    }
  },

  postcss: [
    nested(),
    autoprefixer({
      browsers: [
        '> 1%',
        'last 2 versions'
      ]
    })
  ]
};

module.exports = webpackConfig;
