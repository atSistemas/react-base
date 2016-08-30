import path from 'path';
import base from '../src/base/';

const buildPath = path.resolve(__dirname, '..', 'dist');

export const mainPath = path.resolve(__dirname, '..');
export const clientPath = path.resolve(__dirname, '../src/base/client/');
export const context = path.resolve(__dirname, '../src/app');

export const output = {
  path: buildPath,
  filename: 'bundle.js',
  publicPath: '/'
};

export const resolve = {
  extensions: ['', '.js', '.jsx', '.css'],
  alias: {
    'app': path.resolve(__dirname, '../src/app'),
    'base': path.resolve(__dirname, '../src/base'),
    'store': path.resolve(__dirname, '../src/base/store'),
    'mocks': path.resolve(__dirname, '../server/api/mocks'),
    'containers': path.resolve(__dirname, '../src/app/containers'),
    'components': path.resolve(__dirname, '../src/base/shared/components')
  }
};

export const compileError = function() {
  this.plugin('done', function(stats) {
    if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1) {
      base.console.error(stats.compilation.errors);
    }
  });
};
