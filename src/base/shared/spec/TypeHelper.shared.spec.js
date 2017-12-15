import { expect } from 'chai';
import { createActionType } from '../CreateActionType';

describe('shared / type-helper', () => {

  describe('createActionType', () => {

    it('should return type builder object', () => {

      let TypeExamples = ['typeExample', 'typeExample2'];
      let types = createActionType(TypeExamples);

      expect(types.typeExample).to.equal('typeExample');
      expect(types.typeExample2).to.equal('typeExample2');

    });
  });

});
