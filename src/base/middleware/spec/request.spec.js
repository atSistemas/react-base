import { expect } from 'chai';
import requestMiddleware from '../Request';
import ActionTypes from 'containers/Main/actionTypes';
import logoAPI from 'containers/Main/api';
import { generateFetchTypes } from 'base/shared/TypeHelper';

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
        types: generateFetchTypes(ActionTypes.LOGO_REQUEST),
        request: logoAPI.fetchLogo(props.category)
      };


      const expectedAction = {
        type: 'LOGO_REQUEST'
      };

      expect(dispatchWithStoreOf({}, actions)).to.deep.equal(expectedAction);
    });


    it('requestMiddleware without resquest action', () => {

      const actions = {
        types: generateFetchTypes(ActionTypes.LOGO_REQUEST)
      };

      expect(dispatchWithStoreOf({}, actions)).to.equal(actions);
    });


  });

});
