import webpack from 'webpack';
import helmet from 'helmet';
import compression from 'compression';

import base from 'base';

const config = require('../../webpack/index.babel.js');

const compiler = webpack(config);
let bundleStart = Date.now();

compiler.plugin("compile", function() {
  base.console.info(`Bundling project...`);
  bundleStart = Date.now();
});

compiler.plugin('done', function() {
  base.console.success(`Bundled project in ${Date.now() - bundleStart} ms!`);
});

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

const applyProdMiddleware = () => {
  const middleware = [
    helmet(),
    compression(),
    allowCrossDomain
  ];
  return middleware;
};

module.exports = applyProdMiddleware;