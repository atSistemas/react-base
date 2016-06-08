import path from 'path';
import { symbols, color } from '../../server/shared/console';
import { fileExists, readDir, writeFile } from './FileSystem';

const containersPath = path.resolve(__dirname, '..', 'containers');
const modelFilePath = path.resolve(__dirname, '..', 'models','index.js');

function GenerateModelIndex(){
  const models = getModels();
  let modelImports = '';
  let modelExports = '';

  models.forEach(function(model, index){
    if(model.import){
      modelImports += (index === 0) ? model.import : '\n' + model.import;
      modelExports += model.name + 'Model';
      modelExports += (index < models.length-1) ? ',' : '';
    }
  });

  modelExports = generateModelExport(modelExports);
  let content = modelImports + modelExports;
  let result = writeFile(modelFilePath, content);
  if(result){
    console.log('[BASE] ' + color('success', symbols.ok) + ' Models Index generated correctly!');
  } else {
    console.log('[BASE] ' + color('error', symbols.err) + ' ' + e);
  }
}


function generateModelExport(modelExports){
  return '\r\nexport const modelsIndex = [' + modelExports + '];';
}

function getModels(){
  const files = readDir(containersPath);
  return files.map(function(container){
    let modelPath = path.resolve(containersPath, container, 'models','index.js');
    if(fileExists(modelPath)){
      return { name:container, import:'import * as ' + container + 'Model from \'containers/Main/models\';' };
    } else {
      return { name: container, import: null };
    }
  });
}

module.exports = GenerateModelIndex;
