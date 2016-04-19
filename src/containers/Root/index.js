import { Provider } from 'react-redux'
import React, { Component } from 'react'
import { createHashHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, browserHistory, useRouterHistory } from 'react-router'

import routes from '../../routes'
import configureStore from '../../store/configure-store'

let state = window.__INITIALSTATE__
const store = configureStore(browserHistory, state)
const history = syncHistoryWithStore(browserHistory, store)

class Root extends Component {

  render() {
    return (
      <Provider store={ store }>
        <Router history={ history } routes={ routes } />
      </Provider>
    )
  }
}


export default Root
