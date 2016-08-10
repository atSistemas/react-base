import { expect } from 'chai';
import { typeBuilder, generateFetchTypes } from '../TypeHelper';

describe('shared / type-helper', () => {

  describe('typeBuilder', () => {

    it('should return type builder object', () => {

      let TypeExamples = ['typeExample', 'typeExample2'];
      let types = typeBuilder(TypeExamples);

      expect(types.typeExample).to.equal('typeExample');
      expect(types.typeExample2).to.equal('typeExample2');

    });
  });

  describe('generateFetchTypes', () => {


    it('should return fetch tyspes', () => {

      let TypeExamples = 'TEST';
      let types = generateFetchTypes(TypeExamples);

      expect(types.length).to.equal(3);
      expect(types[0]).to.equal('TEST_REQUEST');
      expect(types[1]).to.equal('TEST_SUCCESS');
      expect(types[2]).to.equal('TEST_ERROR');

    });

  });

});
