import path from 'path';
import { symbols, color } from '../console';
import { fileExists, readDir, writeFile } from '../FileSystem';

const exportTpl = '\n\nexport const modelIndex = [@param];';
const importTpl = 'import * as @paramModel from \'containers/@param/models\';';


function generateImportLine(container){
  return importTpl.replace(/@param/g, container);
}

function generateExportLine(modelExports){
  return exportTpl.replace('@param',modelExports);
}

function generateModelIndex(containersPath, modelFilePath){
  let modelImports = '';
  let modelExports = '';
  const containerModels = getContainerModels(containersPath);

  containerModels.forEach(function(model, index){
    if(model.import){
      modelImports += (index === 1) ? model.import : '\n' + model.import;
      modelExports += model.name + 'Model';
      modelExports += (index < containerModels.length-1) ? ',' : '';
    }
  });

  const content = modelImports + generateExportLine(modelExports);
  const result = writeFile(modelFilePath, content);

  if(result){
    console.log('[BASE] ' + color('success', symbols.ok) + ' Model index generated correctly!');
  } else {
    console.log('[BASE] ' + color('error', symbols.err) + ' ' + result);
  }

}

function getContainerModels(containersPath){
  const containers = readDir(containersPath);
  return containers.map(function(container){
    let modelPath = path.resolve(containersPath, container, 'models','index.js');
    if(fileExists(modelPath)){
      return { name:container, import: generateImportLine(container)};
    } else {
      return { name: container, import: null };
    }
  });
}

module.exports.generateModelIndex = generateModelIndex;
module.exports.generateImportLine = generateImportLine;
module.exports.generateExportLine = generateExportLine;
module.exports.getContainerModels = getContainerModels;
