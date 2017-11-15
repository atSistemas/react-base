import { expect } from 'chai';
import  action from '../';
import ActionTypes from '../../actionTypes';

import LogoAPI from '../../api';

describe('Actions', () => {
  describe('Actions logo', () => {
    it('Should create action fetchLogo', () => {

      const expectedAction = {
        type: ActionTypes.LOGO_REQUEST,
        request: LogoAPI.fetchLogo()
      };

      expect(JSON.parse(JSON.stringify(action.getLogo())))
        .to.deep.equal(JSON.parse(JSON.stringify(expectedAction)));

    });

  });
});
