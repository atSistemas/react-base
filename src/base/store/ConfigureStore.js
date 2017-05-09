import { createLogger } from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import base from 'base/';
import rootReducer from '../reducers';
import requestMiddleware from '../middleware/Request';

function configureStore(history, initialState) {

  let middleware;

  if (base.env === 'development') {
    middleware = applyMiddleware(
      requestMiddleware,
      createLogger({ level: 'info', collapsed: true })
    );
  } else {
    middleware = applyMiddleware(
      requestMiddleware
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
