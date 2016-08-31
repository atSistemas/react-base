import path from 'path';
import chalk from 'chalk';
import webpack from 'webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';

import * as common from './webpack-common-config';

export const entry = common.entry;

export const output = {
  path: common.buildPath,
  filename: "[name].js",
  library: "[name]"
};

export const plugins = [
  new ProgressBarPlugin({
    format: `[BASE] Bundeling Dependencies... [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
    clear: false
  }),
  new webpack.DllPlugin({
    path: path.join(common.manifestPath, "[name]-manifest.json"),
    name: "[name]",
  }),
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin(),
];

export const resolve2 = {
  root: path.resolve(common.clientPath),
  modulesDirectories: ["node_modules"]
};

export const module= {
  loaders: [
   { test: [/\.jsx?$/],loader: 'babel-loader',exclude: /node_modules/,include: common.mainPath, query: { cacheDirectory: true, presets: ['es2015', 'stage-0', 'react'] }},
   { test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:4]!postcss-loader'}
  ]
};

export const resolve =  common.resolve;

export const context = common.context;
