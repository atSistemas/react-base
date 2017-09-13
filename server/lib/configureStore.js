import { applyMiddleware, createStore } from 'redux';
import reduxReqMiddleware from 'redux-req-middleware';
import rootReducer from '../../src/base/reducers/';

export default function configureServerStore() {
  const configureStore = applyMiddleware(reduxReqMiddleware())(createStore);
  return configureStore(rootReducer);
}
