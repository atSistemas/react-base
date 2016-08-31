import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import * as common from './webpack-common-config';

export const cache = true;

export const devtool = 'eval';

export const entry = {
  app: [
    common.clientPath,
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client'
  ]
};

export const context = common.context;

export const plugins = [
  new webpack.DllReferencePlugin({
    context: path.join(__dirname, '...'),
    manifest: require(`${common.manifestPath}/vendor-manifest.json`)
  }),
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"development"'}}),
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin('bundle.css', { allChunks: true }),
  common.compileError
];

export const postcss = (webpack) => [
  require('postcss-import')({ addDependencyTo: webpack }),
  require('postcss-cssnext')(),
  require('postcss-modules-extract-imports'),
  require('postcss-nested')(),
  require('postcss-reporter')(),
  require('postcss-url')()
];

export const module = {
  loaders: [
    { test: [/\.jsx?$/],loader: 'babel-loader', exclude: [/node_modules/, /webpack/, /dist/, /server/], include: [/src/], query: { cacheDirectory: true, presets: ['react-hmre', 'es2015', 'stage-0', 'react'] }},
    { test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:4]!postcss-loader'}
  ]
};

export const output = common.output;

export const resolve = common.resolve;
