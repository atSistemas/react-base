import expect from 'expect';
import * as Actions from '../';
import Types from '../../types';
import { generateFetchTypes } from 'shared/TypeHelper';

import api from '../../api';

describe('Actions', () => {
  describe('Actions <%= name %>', () => {
    it('Should create action get<%= namePascal %>', () => {

      const params = {};
      const expectedAction = {
        types: generateFetchTypes(Types.<%= nameUpper %>_REQUEST),
        request: api.fetch<%= namePascal %>(params)
      };

      expect(Actions.get<%= namePascal %>(params)).toEqual(expectedAction);

    });

  });
});
