import { expect } from 'chai';
import * as Actions from '../';
import Types from '../../types';
import { generateFetchTypes } from 'shared/TypeHelper';

import LogoAPI from '../../api';

describe('Actions', () => {
  describe('Actions logo', () => {
    it('Should create action fetchLogo', () => {

      const params = {};
      const expectedAction = {
        types: generateFetchTypes(Types.LOGO_REQUEST),
        request: LogoAPI.fetchLogo(params)
      };

      expect(Actions.getLogo(params)).to.deep.equal(expectedAction);

    });

  });
});
