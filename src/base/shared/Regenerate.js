require('babel-core/register');
const path = require('path');
const modelIndex = require('./regenerators/RegenerateModelIndex');
const reducerIndex = require('./regenerators/RegenerateReducerIndex');
const regenerateRoutes = require('./regenerators/RegenerateRoutes');

const modelFilePath = path.resolve(__dirname, '..', '..', 'base', 'models','index.js');
const reducerFilePath = path.resolve(__dirname, '..', '..', 'base','reducers','index.js');

const containersPath = path.resolve(__dirname, '..', '..', 'app', 'containers');
const args = process.argv.slice(2);
if (~args.indexOf('--all')  || ~args.indexOf('--routes')) {
  regenerateRoutes();
}

if (~args.indexOf('--all') || ~args.indexOf('--model')) {
  modelIndex.RegenerateModelIndex(containersPath, modelFilePath);
}

if (~args.indexOf('--all')  || ~args.indexOf('--reducer')) {
  reducerIndex.RegenerateReducerIndex(containersPath, reducerFilePath);
}
