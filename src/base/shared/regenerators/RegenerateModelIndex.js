import path from 'path';

import base from '../../';
import { fileExists, readDir, writeFile } from '../FileSystem';

const exportTpl = '\n\nconst modelIndex = [@param];\n\nexport default { modelIndex };';
const importTpl = 'import * as @paramModel from \'containers/@param/models\';';

function RegenerateImportLine(container) {
  return importTpl.replace(/@param/g, container);
}

function RegenerateExportLine(modelExports) {
  return exportTpl.replace('@param', modelExports);
}

function RegenerateModelIndex(containersPath, modelFilePath) {
  let modelImports = '';
  let modelExports = '';
  const containerModels = getContainerModels(containersPath);

  containerModels.forEach(function(model, index) {
    if (model.import) {
      modelImports += (index === 1) ? model.import : '\n' + model.import;
      modelExports += model.name + 'Model';
      modelExports += (index < containerModels.length-1) ? ',' : '';
    }
  });

  const content = modelImports + RegenerateExportLine(modelExports);

  try {
    writeFile(modelFilePath, content);
    base.console.success(`Model index regenerated correctly!`);
    return true;
  } catch (e) {
    base.console.error(`Model index error ${e.msg}`);
    return false;
  }
}

function getContainerModels(containersPath) {
  const containers = readDir(containersPath);
  return containers.map(function(container) {
    let modelPath = path.resolve(containersPath, container, 'models','index.js');
    if (fileExists(modelPath)) {
      return { name:container, import: RegenerateImportLine(container)};
    } else {
      return { name: container, import: null };
    }
  });
}

module.exports.RegenerateModelIndex = RegenerateModelIndex;
module.exports.RegenerateImportLine = RegenerateImportLine;
module.exports.RegenerateExportLine = RegenerateExportLine;
module.exports.getContainerModels = getContainerModels;
