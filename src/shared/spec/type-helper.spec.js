import expect from 'expect';
import { typeBuilder, generetaFetchTypes } from '../type-helper';

describe('shared / type-helper', () => {

  describe('typeBuilder', () => {

    it('should return type builder object', () => {

      let TypeExamples = ['typeExample', 'typeExample2'];
      let types = typeBuilder(TypeExamples);

      expect(types.typeExample).toEqual('typeExample');
      expect(types.typeExample2).toEqual('typeExample2');

    });
  });

  describe('generetaFetchTypes', () => {


    it('should return fetch tyspes', () => {

      let TypeExamples = 'TEST';
      let types = generetaFetchTypes(TypeExamples);

      expect(types.length).toEqual(3);
      expect(types[0]).toEqual('TEST_REQUEST');
      expect(types[1]).toEqual('TEST_SUCCESS');
      expect(types[2]).toEqual('TEST_ERROR');

    });

  });

});
