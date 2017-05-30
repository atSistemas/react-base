import path from 'path';
import chalk from 'chalk';
import webpack from 'webpack';
import AssetsPlugin from 'assets-webpack-plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import baseWpPlugins from '../src/base/wp-plugins';

export const mainPath = path.resolve(__dirname, '..');
export const context = path.resolve(__dirname, '../');
export const buildPath = path.resolve(__dirname, '..', 'dist');
export const basePath = path.resolve(__dirname, '../src/base');
export const dllPath = path.resolve(__dirname, '../dist/dlls');
export const clientPath = path.resolve(__dirname, '../src/base/client/');
export const manifestPath = buildPath;

export const entry = {
  vendor: [
    'react',
    'redux',
    'react-dom',
    'immutable',
    'classnames',
    'react-redux',
    'react-router',
    'isomorphic-fetch',
  ]
};

export const plugins = [
  new ProgressBarPlugin({
    format: `[BASE] ${chalk.blue('i')} Bundling... [:bar] ${chalk.green(':percent')} (:elapsed seconds)`,
    clear: true,
    summary: false,
  }),
  new AssetsPlugin({
    path: buildPath,
    filename: 'webpack-assets.json',
    prettyPrint: true
  }),
  new baseWpPlugins.compileInfoPlugin(),
];

export const postcss = [
  require('postcss-import')({ addDependencyTo: webpack }),
  require('postcss-cssnext')(),
  require('postcss-modules-extract-imports'),
  require('postcss-nested')(),
  require('postcss-reporter')(),
  require('postcss-url')()
];

export const resolve = {
  extensions: ['.js', '.jsx', '.css'],
  modules: ['node_modules'],
  alias: {
    'app': path.resolve(__dirname, '../src/app'),
    'base': path.resolve(__dirname, '../src/base'),
    'store': path.resolve(__dirname, '../src/base/store'),
    'mocks': path.resolve(__dirname, '../server/api/mocks'),
    'containers': path.resolve(__dirname, '../src/app/containers'),
    'components': path.resolve(__dirname, '../src/app/components')
  }
};
