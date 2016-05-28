import expect from 'expect';
import requestMiddleware from '../request';
import types from '../../types';
import logoAPI from '../../api/logo';
import { generetaFetchTypes } from '../../shared/type-helper';

const createFakeStore = fakeData => ({
  getState() {
    return fakeData;
  }
});

const dispatchWithStoreOf = (storeData, action) => {
  let dispatched = null;
  const dispatch = requestMiddleware(createFakeStore(storeData))(actionAttempt => dispatched = actionAttempt);
  dispatch(action);
  return dispatched;
};

describe('middleware', () => {

  describe('request', () => {

    it('requestMiddleware with request', () => {

      const props= {
        category: 'news'
      };

      const actions = {
        types: generetaFetchTypes(types.LOGO_REQUEST),
        request: logoAPI.fetchLogo(props.category)
      };


      const expectedAction = {
        type: 'ITEMS_REQUEST'
      };

      expect(dispatchWithStoreOf({}, actions)).toEqual(expectedAction);
    });


    it('requestMiddleware without resquest action', () => {

      const actions = {
        types: generetaFetchTypes(types.LOGO_REQUEST)
      };

      expect(dispatchWithStoreOf({}, actions)).toEqual(actions);
    });


  });

});
