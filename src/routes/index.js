import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/App';
import Main from '../containers/Main';

const routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ Main } />
    <Route path="/main" component={ Main } />
  </Route>
);

export default routes;
