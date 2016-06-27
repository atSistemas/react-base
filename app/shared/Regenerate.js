require('babel-core/register');
const path = require('path');
const modelIndex = require('./regenerators/RegenerateModelIndex.js');
const reducerIndex = require('./regenerators/RegenerateReducerIndex.js');
const regenerateRoutes = require('./regenerators/RegenerateRoutes.js');

const modelFilePath = path.resolve(__dirname, '..', 'models','index.js');
const reducerFilePath = path.resolve(__dirname, '..', 'reducers','index.js');

const containersPath = path.resolve(__dirname, '..', 'containers');
const args = process.argv.slice(2);

if(~args.indexOf('--all')  || ~args.indexOf('--routes')){
  regenerateRoutes();
}

if(~args.indexOf('--all') || ~args.indexOf('--model')){
  modelIndex.RegenerateModelIndex(containersPath, modelFilePath);
}

if(~args.indexOf('--all')  || ~args.indexOf('--reducer')){
  reducerIndex.RegenerateReducerIndex(containersPath, reducerFilePath);
}
