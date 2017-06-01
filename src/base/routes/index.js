import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App/';
import Calculator from 'containers/Calculator/';
import Ecma6 from 'containers/Ecma6/';
import Ecma6Exercises from 'containers/Ecma6Exercises/';
import Main from 'containers/Main/';
import ReactCourse from 'containers/ReactCourse/';
import WeatherStations from 'containers/WeatherStations/';

const routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ Main } />
    <Route path="/calculator" component={ Calculator } />
    <Route path="/ecma6" component={ Ecma6 } />
    <Route path="/ecma6exercises" component={ Ecma6Exercises } />
    <Route path="/main" component={ Main } />
    <Route path="/reactcourse" component={ ReactCourse } />
    <Route path="/weatherstations" component={ WeatherStations } />
  </Route>
);

export default routes;