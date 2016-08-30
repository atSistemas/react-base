import path from 'path';

import base from '../../';
import { fileExists, readDir, writeFile } from '../FileSystem';

const mainImportTpl = 'import { combineReducers } from \'redux\';\n';
const exportTpl = '\n\nexport default combineReducers({\n@param\n});';
const importTpl = 'import @param from \'containers/@param/reducers\';';

function RegenerateImportLine(container) {
  return importTpl.replace(/@param/g, container);
}

function RegenerateExportLine(reducerExports) {
  return exportTpl.replace('@param', reducerExports);
}

function RegenerateReducerIndex(containersPath, reducerFilePath ) {
  let reducerImports = mainImportTpl;
  let reducerExports = '';
  const containerReducers = getContainerReducers(containersPath);

  containerReducers.forEach(function(reducer, index) {
    if (reducer.import) {
      reducerImports += (index === 0) ? reducer.import : '\n' + reducer.import;
      reducerExports += '  ' + reducer.name;
      reducerExports += (index < containerReducers.length-1) ? ',\n' : '';
    }
  });

  const content = reducerImports + RegenerateExportLine(reducerExports);

  try {
    writeFile(reducerFilePath, content);
    base.console.success(`Reducer index regenerated correctly!`);
    return true;
  } catch (e) {
    base.console.error(`Reducer index error ${e.msg}`);
    return false;
  }
}

function getContainerReducers(containersPath) {
  const files = readDir(containersPath);
  return files.map(function(container) {
    let reducerPath = path.resolve(containersPath, container, 'reducers','index.js');
    if (fileExists(reducerPath)) {
      return { name:container, import: RegenerateImportLine(container)};
    } else {
      return { name: container, import: null };
    }
  });
}

module.exports.RegenerateReducerIndex = RegenerateReducerIndex;
module.exports.RegenerateImportLine = RegenerateImportLine;
module.exports.RegenerateExportLine = RegenerateExportLine;
module.exports.getContainerReducers = getContainerReducers;
