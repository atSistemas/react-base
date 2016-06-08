require('babel-core/register');
const args = process.argv.slice(2);
const generateModel = require('./GenerateModelIndex.js');

if(~args.indexOf('--model')){
  generateModel();
}
