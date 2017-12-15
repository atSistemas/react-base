import { createLogger } from 'redux-logger';
import reduxReqMiddleware from 'redux-req-middleware';
import { createStore, compose, applyMiddleware } from 'redux';

import base from 'base/';
import rootReducer from '../reducers';

function configureStore(history, initialState) {

  let composeEnhancer = compose;
  let middleware;

  if (base.env === 'development') {
    middleware = applyMiddleware(
      createLogger({ level: 'info', collapsed: true }),
      reduxReqMiddleware(),
    );
    composeEnhancer = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  } else {
    middleware = applyMiddleware(
      reduxReqMiddleware()
    );
  }

  const enhancer = composeEnhancer(middleware);
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore;
