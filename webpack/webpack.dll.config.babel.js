import path from 'path';
import webpack from 'webpack';

import baseWpPlugins from '../src/base/wp-plugins';
import * as common from './webpack.common.config';

export const cache = true;
export const devtool = 'eval';
export const entry = common.entry;
export const output = common.output;
export const context = common.context;
export const resolve = common.resolve;

export const module = {
  loaders: [
    {
      test: [/\.jsx?$/],
      include: [/src/],
      loader: 'babel-loader',
      exclude: [/node_modules/, /dist/, /server/],
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'stage-0', 'react']
      }
    }
  ]
};

export const plugins = [
  new webpack.DllPlugin({
    path: path.join(common.manifestPath, "[name]-manifest.json"),
    name: "[name]",
  }),
  new baseWpPlugins.fileHashPlugin({
    path: common.buildPath,
    fileName: 'vendor-hashes.json'
  }),
]
.concat(common.plugins);
