import { Provider } from 'react-redux'
import React, { Component } from 'react'
import { createHashHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, browserHistory, useRouterHistory } from 'react-router'

import routes from '../../routes'
import DevTools from '../DevTools'
import configureStore from '../../store/configure-store'

const store = configureStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

class Root extends Component {

  render() {
    return (
      <Provider store={ store }>
      <div>
        <Router history={ history } routes={ routes } />
        <DevTools />
        </div>
      </Provider>
    )
  }
}


export default Root
