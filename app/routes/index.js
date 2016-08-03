import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App/';
import Calculator from 'containers/Calculator/';
import Main from 'containers/Main/';
import WeatherStations from 'containers/WeatherStations/';

const routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ Main } />
    <Route path="calculator" component={ Calculator } />
    <Route path="main" component={ Main } />
  </Route>
);

export default routes;