import { createLogger } from 'redux-logger';
import reduxReqMiddleware from 'redux-req-middleware';
import { createStore, compose, applyMiddleware } from 'redux';

import base from 'base/';
import rootReducer from '../reducers';

function configureStore(history, initialState) {

  let middleware;

  if (base.env === 'development') {
    middleware = applyMiddleware(
      createLogger({ level: 'info', collapsed: true }),
      reduxReqMiddleware(),
    );
  } else {
    middleware = applyMiddleware(
      reduxReqMiddleware()
    );
  }

  const enhancer = compose(middleware);
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore;
