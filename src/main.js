import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import useScroll from 'scroll-behavior/lib/useStandardScroll'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import configureStore from './store/configure-store'
import routes from './routes'

let state = window.__initialState__ || undefined
const store = configureStore(browserHistory, state)
const createScrollHistory = useScroll(createBrowserHistory)
const appHistory = useRouterHistory(createScrollHistory)()
const history = syncHistoryWithStore(appHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
