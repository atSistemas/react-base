import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App/';
import Calculator from 'containers/Calculator/';
import Ecma6Exercises from 'containers/Ecma6Exercises/';
import ImmutableExercises from 'containers/ImmutableExercises/';
import Main from 'containers/Main/';
import ReactExercises from 'containers/ReactExercises/';
import ReduxExercises from 'containers/ReduxExercises/';
import TestingExercises from 'containers/TestingExercises/';
import WeatherStations from 'containers/WeatherStations/';

const routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ Main } />
    <Route path="/calculator" component={ Calculator } />
    <Route path="/ecma6exercises" component={ Ecma6Exercises } />
    <Route path="/immutableexercises" component={ ImmutableExercises } />
    <Route path="/main" component={ Main } />
    <Route path="/reactexercises" component={ ReactExercises } />
    <Route path="/reduxexercises" component={ ReduxExercises } />
    <Route path="/testingexercises" component={ TestingExercises } />
    <Route path="/weatherstations" component={ WeatherStations } />
  </Route>
);

export default routes;