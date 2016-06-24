'use strict';

require('babel-core/register');

const webpack = require('webpack'),
  consoleHelper = require('./console-helper');

const build = (env) => {

  process.env.NODE_ENV = env || 'production';

  // returns a Compiler instance
  let compiler = webpack(require('../webpack/webpack.config.babel.js'));

  compiler.run((err, stats) => {
    if (err) {
      console.log(consoleHelper.error("application build failed:"));
      process.exit(err);
    }
    console.log(stats.toString({
      colors: true
    }));

    /*generatePackage(env, function (err) {
      if (!err) {
        console.log(consoleHelper.success('application generated successfully.'));
        process.exit(0);
      } else {
        process.exit(err);
      }
    });*/

  });
};

let args = process.argv.slice(2);
require.main === module ? build(...args) : module.exports = build;
