import fs from 'fs';
import path from 'path';
import expect from 'expect';
import { generateImportLine, generateExportLine, getContainerReducers, generateReducerIndex } from '../GenerateReducerIndex';

describe('shared / Generators / GenerateReducerIndex', () => {

  describe('generateImportLine', () => {

    it('Sould return the import line of a reducer', () => {

      const procesedImport = generateImportLine('Main');
      const expectedImport = 'import Main from \'containers/Main/reducers\';';

      expect(procesedImport).toEqual(expectedImport);

    });
  });

  describe('generateExportLine', () => {

    it('Sould return the export line for models', () => {

      const procesedExport = generateExportLine('Main');
      const expectedExport = '\n\nexport default combineReducers({\nMain\n});';

      expect(procesedExport).toEqual(expectedExport);

    });
  });


  describe('getContainerModels', () => {

    it('Sould return an object with avaiable reducers for import', () => {

      const containersPath = path.resolve(__dirname, '..', '..', '..', 'containers');
      const result = getContainerReducers(containersPath);

      const containers = fs.readdirSync(containersPath);
      const expectedResult = containers.map(function(container){

        let reducerPath = path.resolve(containersPath, container, 'reducers','index.js');
        try{
          fs.accessSync(reducerPath);
          return { name:container, import: generateImportLine(container)};
        }catch(e){
          return { name: container, import: null };
        }
      });

      expect(result).toEqual(expectedResult);

    });
  });
});
