require('babel-core/register');
const path = require('path');
const modelIndex = require('./generators/GenerateModelIndex.js');
const generateReducerIndex = require('./generators/GenerateReducerIndex.js');
const generateRoutes = require('./generators/GenerateRoutes.js');

const containersPath = path.resolve(__dirname, '..', 'containers');
const args = process.argv.slice(2);

if(~args.indexOf('--all')  || ~args.indexOf('--routes')){
  generateRoutes();
}

if(~args.indexOf('--all') || ~args.indexOf('--model')){
  const modelFilePath = path.resolve(__dirname, '..', 'models','index.js');
  modelIndex.generateModelIndex(containersPath, modelFilePath);
}

if(~args.indexOf('--all')  || ~args.indexOf('--reducer')){
  generateReducerIndex();
}
