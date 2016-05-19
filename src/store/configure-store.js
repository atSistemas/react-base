import Immutable from 'immutable'
import createLogger from 'redux-logger'
import { createStore, compose, applyMiddleware } from 'redux'

import rootReducer from '../reducers'
import requestMiddleware from '../middleware/request'

function configureStore(history, initialState) {

  const enhancer = compose(
    applyMiddleware(
      requestMiddleware,
      createLogger({ level: 'info', collapsed: true })
    )
  )

  //const state = Immutable.fromJS(initialState)
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
