import RootContainer from './containers/root'
import HomeContainer from './containers/home'
import ListContainer from './containers/list'
import App from './containers/app'
import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'

const routes = (

  <Route path="/" component={App}>
    <IndexRoute component={HomeContainer}/>
    <Route path="home" component={HomeContainer}/>
    <Route path="list" component={ListContainer}/>
  </Route>

)

export default routes
