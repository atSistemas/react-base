'use strict';
const webpack = require('webpack'),
  babel = require('babel-core'),
  consoleHelper = require('./console-helper'),
  path = require('path');

//cross-env NODE_ENV=production webpack --config webpack/webpack.config.babel.js

const build = (env) => {

  process.env.NODE_ENV = env || 'production';
  // returns a Compiler instance
  //console.log(babel.transformFileSync('./webpack/webpack.config.babel.js', {}).code);
  let compiler = webpack(babel.transformFileSync('./webpack/webpack.config.babel.js', {}));

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
