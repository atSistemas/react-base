import expect from 'expect';
import * as Actions from '../';
import Types from '../../types';
import { generetaFetchTypes } from 'shared/TypeHelper';

import LogoAPI from '../../api';

describe('Actions', () => {
  describe('Actions logo', () => {
    it('Should create action fetchLogo', () => {

      const params = {};
      const expectedAction = {
        types: generetaFetchTypes(Types.LOGO_REQUEST),
        request: LogoAPI.fetchLogo(params)
      };

      expect(Actions.getLogo(params)).toEqual(expectedAction);

    });

  });
});
