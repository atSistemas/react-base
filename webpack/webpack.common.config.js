import path from 'path';
import chalk from 'chalk';
import webpack from 'webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import base from '../src/base/';
import * as common from './webpack.common.config';

export const buildPath = path.resolve(__dirname, '..', 'dist');
export const mainPath = path.resolve(__dirname, '..');
export const basePath = path.resolve(__dirname, '../src/base');
export const clientPath = path.resolve(__dirname, '../src/base/client/');
export const manifestPath = path.resolve(basePath, 'manifest');
export const context = path.resolve(__dirname, '../src/');

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

export const output = {
  path: buildPath,
  library: "[name]",
  filename: '[name].js',
  chunkFilename: "[name].js",
  publicPath: '/'
};

export const plugins = [
  new ProgressBarPlugin({
    format: `[BASE] ${chalk.blue('i')} Bundling... [:bar] ${chalk.green(':percent')} (:elapsed seconds)`,
    clear: true,
    summary: false,
  }),
  new webpack.DllReferencePlugin({
    context: path.join(__dirname, '...'),
    manifest: require(`${common.manifestPath}/vendor-manifest.json`)
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(true),
  new ExtractTextPlugin('bundle.css', { allChunks: true })
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
  extensions: ['', '.js', '.jsx', '.css'],
  modulesDirectories: ['node_modules'],
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
