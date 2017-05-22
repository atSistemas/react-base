import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App/';
import Calculator from 'containers/Calculator/';
import Ecma6 from 'containers/Ecma6/';
import Main from 'containers/Main/';
import WeatherStations from 'containers/WeatherStations/';

const routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ Main } />
    <Route path="/calculator" component={ Calculator } />
    <Route path="/ecma6" component={ Ecma6 } />
    <Route path="/main" component={ Main } />
    <Route path="/weatherstations" component={ WeatherStations } />
  </Route>
);

export default routes;