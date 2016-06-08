require('babel-core/register');
const args = process.argv.slice(2);
const generateModelIndex = require('./generators/GenerateModelIndex.js');
const generateReducerIndex = require('./generators/GenerateReducerIndex.js');
const generateRoutes = require('./generators/GenerateRoutes.js');

if(~args.indexOf('--all')  || ~args.indexOf('--routes')){
  generateRoutes();
}

if(~args.indexOf('--all') || ~args.indexOf('--model')){
  generateModelIndex();
}

if(~args.indexOf('--all')  || ~args.indexOf('--reducer')){
  generateReducerIndex();
}
