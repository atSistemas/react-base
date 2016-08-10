import { expect } from 'chai';
import  action from '../';
import Types from '../../types';
import { generateFetchTypes } from 'base/shared/TypeHelper';

import LogoAPI from '../../api';

describe('Actions', () => {
  describe('Actions logo', () => {
    it('Should create action fetchLogo', () => {
      const params = {};
      const expectedAction = {
        types: generateFetchTypes(Types.LOGO_REQUEST),
        request: LogoAPI.fetchLogo(params)
      };

      expect(action.getLogo(params)).to.deep.equal(expectedAction);

    });

  });
});
