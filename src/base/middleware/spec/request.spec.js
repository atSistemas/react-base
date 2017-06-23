import { expect } from 'chai';
import requestMiddleware from '../Request';
import logoAPI from 'containers/Main/api';
import ActionTypes from 'containers/Main/actionTypes';
import { browserHistory } from 'react-router';
import ConfigureStore from 'store/ConfigureStore';

const store = ConfigureStore(browserHistory, {});

describe('middleware', () => {

  describe('Request', () => {

    it('should return a resolved ERROR action', () => {

      const action = {
        type: ActionTypes.LOGO_REQUEST,
        request: logoAPI.fetchLogo(true)
      };

      store.dispatch(action)
      .then(a => expect(a.type).to.equal('LOGO_ERROR'));
    });

/*
    it('requestMiddleware without resquest action', () => {

      const actions = {
        type: ActionTypes.LOGO_REQUEST
      };

      expect(dispatchWithStoreOf({}, actions)).to.equal(actions);
    });

*/
  });

});
