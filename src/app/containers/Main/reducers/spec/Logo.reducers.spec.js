import { expect } from 'chai';

import mainReducer from '../';
import types from '../../types';
import { MainModel } from '../../models/';

describe('Reducers', () => {
  describe('Logo reducer', () => {

    it('Should perform a request', () => {

      const action = { type: types.LOGO_REQUEST };
      expect(mainReducer([], action)).to.deep.equal([]);
    });


    it('Should return the response data', () => {
      const data =   {
          id: 1,
          alt: "React Base!",
          name: "ReactBaseLogo",
          width: 500,
          src: "/assets/images/react-base-logo.png"
        };
      const action = {type: types.LOGO_SUCESS, result:data};
      const model = new MainModel(data);
      const reducer = mainReducer(model, action);
      const src = reducer.get('src');
      const expectedSrc = '/assets/images/react-base-logo.png';

      expect(expectedSrc).to.equal(src);

    });


    it('should execute request fail', () => {

      const action = { type: types.LOGO_ERROR };
      expect(mainReducer([], action)).to.deep.equal([]);
    });
  });
});
