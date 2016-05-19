import { render } from 'react-dom'
import { Provider } from 'react-redux'
import React from 'react'
import { Router, browserHistory } from 'react-router'

import routes from './routes'
import configureStore from './store/configure-store'
const state = window.$REDUX_STATE
const store = configureStore(browserHistory, state)

render(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  document.getElementById('root')
)
