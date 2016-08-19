import path from 'path';
import envConfig from './env-config';

const buildPath = path.resolve(__dirname, '..', 'dist');

const webpackConfig = {

  devtool: envConfig.devTool,

  entry: envConfig.entries,

  context: envConfig.context,

  plugins: envConfig.plugins,

  postcss: envConfig.postCss,

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
      'app': path.resolve(__dirname, '../src/app'),
      'components': path.resolve(__dirname, '../src/base/shared/components'),
      'containers': path.resolve(__dirname, '../src/app/containers'),
      'base': path.resolve(__dirname, '../src/base'),
      'store': path.resolve(__dirname, '../src/base/store'),
      'mocks': path.resolve(__dirname, '../server/api/mocks')
    }
  }

};

module.exports = webpackConfig;
