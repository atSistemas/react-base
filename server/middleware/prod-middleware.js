import webpack from 'webpack';
import compression from 'compression';

const config = require('../../webpack/webpack.config.babel');
const compiler = webpack(config);

const bundleStart = Date.now();

compiler.plugin('done', function() {
  console.log('[BASE] Bundled project in ' + (Date.now() - bundleStart) + 'ms!');
});

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

const applyProdMiddleware = function(){
  return [
    compression(),
    allowCrossDomain
  ];
};

module.exports = applyProdMiddleware;
