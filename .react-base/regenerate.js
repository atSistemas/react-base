require('babel-core/register');
const path = require('path');
const modelIndex = require('./regenerators/RegenerateModelIndex.js');
const reducerIndex = require('./regenerators/RegenerateReducerIndex.js');
const regenerateRoutes = require('./regenerators/RegenerateRoutes.js');

const modelFilePath = path.resolve(process.cwd(), 'app', 'models','index.js');
const reducerFilePath = path.resolve(process.cwd(), 'app', 'reducers', 'index.js');
const containersPath = path.resolve(process.cwd(), 'app', 'containers');

const args = process.argv.slice(2);

if(~args.indexOf('--all')  || ~args.indexOf('--routes') || !args){
  regenerateRoutes();
}

if(~args.indexOf('--all') || ~args.indexOf('--model') || !args){
  modelIndex.RegenerateModelIndex(containersPath, modelFilePath);
}

if(~args.indexOf('--all')  || ~args.indexOf('--reducer') || !args){
  reducerIndex.RegenerateReducerIndex(containersPath, reducerFilePath);
}
