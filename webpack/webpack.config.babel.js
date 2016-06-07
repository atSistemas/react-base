import path from 'path';
import getEnvConfig from './env-config';

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
      'src': path.resolve(__dirname, '../src'),
      'components': path.resolve(__dirname, '../src/components'),
      'containers': path.resolve(__dirname, '../src/containers'),      
      'shared': path.resolve(__dirname, '../src/shared'),      
      'store': path.resolve(__dirname, '../src/store')
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
