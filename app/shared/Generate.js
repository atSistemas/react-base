require('babel-core/register');
const path = require('path');
const modelIndex = require('./generators/GenerateModelIndex.js');
const reducerIndex = require('./generators/GenerateReducerIndex.js');
const generateRoutes = require('./generators/GenerateRoutes.js');

const modelFilePath = path.resolve(__dirname, '..', 'models','index.js');
const reducerFilePath = path.resolve(__dirname, '..', 'reducers','index.js');

const containersPath = path.resolve(__dirname, '..', 'containers');
const args = process.argv.slice(2);

if(~args.indexOf('--all')  || ~args.indexOf('--routes')){
  generateRoutes();
}

if(~args.indexOf('--all') || ~args.indexOf('--model')){
  modelIndex.generateModelIndex(containersPath, modelFilePath);
}

if(~args.indexOf('--all')  || ~args.indexOf('--reducer')){
  reducerIndex.generateReducerIndex(containersPath, reducerFilePath);
}
