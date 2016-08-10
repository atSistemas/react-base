import fs from 'fs';
import path from 'path';
import { expect } from 'chai';
import { fileExists, writeFile } from '../../FileSystem';
import { RegenerateImportLine, RegenerateExportLine, getContainerModels, RegenerateModelIndex } from '../RegenerateModelIndex';

describe('shared / Regenerators / RegenerateModelIndex', () => {

  describe('RegenerateImportLine', () => {

    it('Sould return the import line of a model', () => {

      const procesedImport = RegenerateImportLine('Main');
      const expectedImport = 'import * as MainModel from \'containers/Main/models\';';

      expect(procesedImport).to.equal(expectedImport);

    });
  });

  describe('RegenerateExportLine', () => {

    it('Sould return the export line for models', () => {

      const procesedExport = RegenerateExportLine('Main');
      const expectedExport = '\n\nconst modelIndex = [Main];\n\nexport default { modelIndex };';

      expect(procesedExport).to.equal(expectedExport);

    });
  });


  describe('getContainerModels', () => {

    it('Sould return an object with avaiable models', () => {

      const containersPath = path.resolve(__dirname, '..', '..', '..', '..', 'app', 'containers');
      const result = getContainerModels(containersPath);

      const containers = fs.readdirSync(containersPath);
      const expectedResult = containers.map(function(container){

        let modelPath = path.resolve(containersPath, container, 'models','index.js');
        try{
          fs.accessSync(modelPath);
          return { name:container, import: RegenerateImportLine(container)};
        }catch(e){
          return { name: container, import: null };
        }
      });

      expect(result).to.deep.equal(expectedResult);

    });
  });


  describe('RegenerateModelIndex', () => {

    it('Sould write the model index file', () => {
      const containersPath = path.resolve(__dirname, '..', '..', '..', '..', 'app', 'containers');
      const fakeModelPath = path.resolve(__dirname, 'fake.js');
      const result = RegenerateModelIndex(containersPath, fakeModelPath);

      expect(result).to.equal(true);
      expect(fileExists(fakeModelPath)).to.equal(true);
      fs.unlink(fakeModelPath);

    });
  });
});
