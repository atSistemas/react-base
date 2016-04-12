import React from 'react'
import App from './components/app'
import HomePage from './pages/home'
import { IndexRoute, Route } from 'react-router'

export default (

  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage }/>
    <Route path="/home" component={ HomePage } />
  </Route>

)
