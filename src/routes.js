import React from 'react'
import App from './containers/app'
import HomePage from './containers/home'
import { IndexRoute, Route } from 'react-router'

export default (

  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage } />
    <Route path="/home" component={ HomePage } />
  </Route>

)
