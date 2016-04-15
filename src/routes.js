import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'

import App from './containers/App'
import Home from './containers/Home'
import List from './containers/List'

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ Home }/>
    <Route path="/list" component={ List }/>
    <Route path="/home" component={ Home }/>
  </Route>
)

export default routes
