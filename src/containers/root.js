import React, { Component } from 'react'
import Routes from '../routes'
import HomeContainer from './home'
import { syncHistory, routerReducer } from 'redux-simple-router'
import { Router, Route, browserHistory } from 'react-router'
import configureStore from '../store/configure-store'
import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import ReactBaseLogo from '../components/logo'

/*

const reducer = combineReducers(Object.assign({}, reducers, {
  ...reducers,
  routing: routerReducer
}))

const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)
const store = createStoreWithMiddleware(reducer)
reduxRouterMiddleware.listenForReplays(store)
const history = syncHistoryWithStore(browserHistory, store)

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)


class Root extends Component {

  render() {
    return (
      <Provider store={store}>
         <Router history={history}>
           <Route path="/" component={ReactBaseLogo}>
            <IndexRoute component={HomeContainer}/>
             <Route path="home" component={HomeContainer}/>
           </Route>
         </Router>
         <DevTools />
       </Provider>
    )
  }

}

export default Root
*/
