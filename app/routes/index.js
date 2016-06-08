import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App/'
import _Main from 'containers/Main/';

const routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ _Main } />
      <Route path="/main" component={ _Main } />
  </Route>
);

export default routes;