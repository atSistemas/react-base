require('babel-core/register');
const args = process.argv.slice(2);

if(~args.indexOf('--model')){
  const generateModelIndex = require('./GenerateModelIndex.js');
  generateModelIndex();
}

if(~args.indexOf('--reducer')){
  const generateReducerIndex = require('./GenerateReducerIndex.js');
  generateReducerIndex();
}
