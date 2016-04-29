import { render } from 'react-dom'
import { Provider } from 'react-redux'
import React from 'react'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, browserHistory } from 'react-router'

import routes from './routes'
import configureStore from './store/configure-store'

let state = window.$REACTBASE_STATE
const store = configureStore(browserHistory, state)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  document.getElementById('root')
)
