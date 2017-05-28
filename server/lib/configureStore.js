import { applyMiddleware, createStore } from 'redux';

import rootReducer from '../../src/base/reducers/';
import requestMiddleware from '../../src/base/middleware/Request';

export default function configureServerStore() {
  const configureStore = applyMiddleware( requestMiddleware )( createStore );
  return configureStore(rootReducer);
}
