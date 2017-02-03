import * as path from 'path';
const webpack = require('webpack');

import baseWpPlugins from '../src/base/wp-plugins';
import * as common from './webpack.common.config';

export const cache = true;
export const devtool = 'eval';
export const entry = common.entry;
export const output = common.output;
export const context = common.context;
export const resolve = common.resolve;

export const module = {
  rules: [
    {
      test: [/\.jsx?$/],
      include: [/src/],
      use: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['es2015', 'stage-0', 'react']
          }
        }
      ],
      exclude: [/node_modules/, /dist/, /server/],
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
