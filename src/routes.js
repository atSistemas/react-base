import React from 'react'
import HomeContainer from './containers/home'
import { createDevTools } from './containers/dev-tools'
import {IndexRoute, Route } from './shared/route-helper'

export default (

  <Route path="/" component={ HomeContainer }>
    <IndexRoute component={ createDevTools } />
    <Route path="/home" component={ HomeContainer } />
    <Route path="/dev" component={ createDevTools } />
  </Route>

)
