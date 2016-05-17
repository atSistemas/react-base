import createLogger from 'redux-logger'
import { createStore, compose, applyMiddleware } from 'redux'
import requestMiddleware from '../middleware/request'

import rootReducer from '../reducers'

function configureStore(history, initialState) {

  const enhancer = compose(
    applyMiddleware(
      requestMiddleware,
      createLogger({level: 'info',collapsed: true})
    )
  )

  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store

}

export default configureStore
