import webpack from 'webpack';
import path from 'path';
import * as common from './webpack.common.config';

export const cache = true;
export const devtool = 'cheap-source-map';
export const output = common.output;
export const context = common.context;
export const resolve = common.resolve;
export const postcss = common.postcss;

export const entry = {
  app: [
    common.clientPath,
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client'
  ]
};

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
            presets: ['react-hmre', 'es2015', 'stage-0', 'react']
          }
        }
      ],
      exclude: [/node_modules/, /dist/, /server/],
    },
    {
      test: /\.css$/,
      use: [
        {
          loader:"style-loader"
        },
        {
          loader: "css-loader",
          options:{
            modules: true,
            importLoaders: 1,
            localIdentName: "[name]__[local]-[hash:base64:4]"
          }
        },
        {
          loader:"",
          options: {
            plugins: function () {
              return postcss;
            }
          }
      }]
    }
  ]
};

export const plugins = [
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"development"'}}),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DllReferencePlugin({
    context: common.context,
    manifest: require(`${common.manifestPath}/vendor-manifest.json`)
  }),
]
.concat(common.plugins);
