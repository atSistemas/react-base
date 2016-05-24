import { render } from 'react-dom'
import { Provider } from 'react-redux'
import React from 'react'
import { Router, browserHistory } from 'react-router'

import routes from './routes'
import configureStore from './store/configure-store'
import { generateImmutable } from './shared/model-helper'
import initialState from './shared/initial-state'

const store = configureStore(browserHistory, initialState)

render(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  document.getElementById('root')
)
