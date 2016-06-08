require('babel-core/register');
const args = process.argv.slice(2);

if(~args.indexOf('--model')){
  const generateModelIndex = require('./generators/GenerateModelIndex.js');
  generateModelIndex();
}

if(~args.indexOf('--reducer')){
  const generateReducerIndex = require('./generators/GenerateReducerIndex.js');
  generateReducerIndex();
}
