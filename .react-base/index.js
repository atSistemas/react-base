#! /usr/bin/env node

'use strict';
require('babel-core/register');
const logo = require('./logo');
const methods = require('./methods');
const baseConsole = require('./console-helper');
const test = require('./test');

const build = (method) => {

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
      break;
    case methods.TEST:
      test("**/*.spec.js", ['babel-register', 'ignore-styles']);
      break;
    case methods.START:
      break;
    default:
  }
};

let args = process.argv.slice(2);
require.main === module ? build(...args) : module.exports = build;
