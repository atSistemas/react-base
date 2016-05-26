import path from 'path';
import getEnvConfig from './env-config';

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
    alias: {},
    extensions: ['', '.js', '.jsx']
  }

};

module.exports = webpackConfig;
