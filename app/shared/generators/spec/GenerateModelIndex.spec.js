import fs from 'fs';
import path from 'path';
import expect from 'expect';
import { generateImportLine, generateExportLine, getContainerModels, generateModelIndex } from '../GenerateModelIndex';

describe('shared / Generators / GenerateModelIndex', () => {

  describe('generateImportLine', () => {

    it('Sould return the import line of a model', () => {

      const procesedImport = generateImportLine('Main');
      const expectedImport = 'import * as MainModel from \'containers/Main/models\';';

      expect(procesedImport).toEqual(expectedImport);

    });
  });

  describe('generateExportLine', () => {

    it('Sould return the export line for models', () => {

      const procesedExport = generateExportLine('Main');
      const expectedExport = '\n\nexport const modelIndex = [Main];';

      expect(procesedExport).toEqual(expectedExport);

    });
  });


  describe('getContainerModels', () => {

    it('Sould return an object with avaiable models', () => {

      const containersPath = path.resolve(__dirname, '..', '..', '..', 'containers');
      const result = getContainerModels(containersPath);

      const containers = fs.readdirSync(containersPath);
      const expectedResult = containers.map(function(container){

        let modelPath = path.resolve(containersPath, container, 'models','index.js');
        try{
          fs.accessSync(modelPath);
          return { name:container, import: generateImportLine(container)};
        }catch(e){
          return { name: container, import: null };
        }
      });

      expect(result).toEqual(expectedResult);

    });
  });
});
