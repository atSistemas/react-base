import path from 'path';
import { symbols, color } from '../../../server/shared/console';
import { fileExists, readDir, writeFile } from '../FileSystem';

const containersPath = path.resolve(__dirname, '..', '..', 'containers');
const reducerFilePath = path.resolve(__dirname, '..', '..', 'reducers','index.js');

function GenerateReducerIndex(){
  const reducers = getReducers();
  let reducerImports = 'import { combineReducers } from \'redux\';\n';
  let reducerExports = '';

  reducers.forEach(function(reducer, index){
    if(reducer.import){
      reducerImports += (index === 0) ? reducer.import : '\n' + reducer.import;
      reducerExports += '  _' + reducer.name;
      reducerExports += (index < reducers.length-1) ? ',' : '';
    }
  });

  reducerExports = generateReducerExport(reducerExports);
  let content = reducerImports + reducerExports;
  let result = writeFile(reducerFilePath, content);
  if(result){
    console.log('[BASE] ' + color('success', symbols.ok) + ' Reducer index generated correctly!');
  } else {
    console.log('[BASE] ' + color('error', symbols.err) + ' ' + result);
  }
}


function generateReducerExport(reducerExports){
  return '\r\nexport default combineReducers({\n' + reducerExports + '\n});';
}

function getReducers(){
  const files = readDir(containersPath);
  return files.map(function(container){
    let reducerPath = path.resolve(containersPath, container, 'reducers','index.js');
    if(fileExists(reducerPath)){
      return { name:container, import:'import _' + container + ' from \'containers/'+ container +'/reducers\';\n' };
    } else {
      return { name: container, import: null };
    }
  });
}

module.exports = GenerateReducerIndex;
