#! /usr/bin/env node

'use strict';
require('babel-core/register');

const logo = require('./logo');
const methods = require('./methods');
const baseConsole = require('./console-helper');
const test = require('./test');
const build = require('./build');

const index = (method) => {

  baseConsole.clear();

  logo();

  method = method ? method : methods.START;

  switch (method.toLowerCase()) {
    case methods.GENERATE:
      break;
    case methods.REGENERATE:
      break;
    case methods.LINT:
      break;
    case methods.BUILD:
      build();
      break;
    case methods.TEST:
      test();
      break;
    case methods.START:
      break;
    default:
  }
};

let args = process.argv.slice(2);
require.main === module ? index(...args) : module.exports = build;
