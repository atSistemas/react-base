import expect from 'expect';
import * as Actions from '../';
import Types from '../../types';
import { generateFetchTypes } from 'shared/TypeHelper';

import api from '../../api';

describe('Actions', () => {
  describe('Actions Calculator', () => {
    it('Should create action getCalculator', () => {

      const params = {};
      const expectedAction = {
        types: generateFetchTypes(Types.CALCULATOR_REQUEST),
        request: api.fetchCalculator(params)
      };

      expect(Actions.getCalculator(params)).toEqual(expectedAction);

    });

  });
});
