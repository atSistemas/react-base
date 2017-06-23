import { expect } from 'chai';
import  action from '../';
import ActionTypes from '../../actionTypes';

import LogoAPI from '../../api';

describe('Actions', () => {
  describe('Actions logo', () => {
    it('Should create action fetchLogo', () => {
      const params = {};
      const expectedAction = {
        type: ActionTypes.LOGO_REQUEST,
        request: LogoAPI.fetchLogo(params)
      };

      expect(action.getLogo(params)).to.deep.equal(expectedAction);

    });

  });
});
