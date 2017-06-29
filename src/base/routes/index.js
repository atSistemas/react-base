import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App/';
import Calculator from 'containers/Calculator/';
import Ecma6 from 'containers/Ecma6/';
import Ecma6Exercises from 'containers/Ecma6Exercises/';
import ImmutableCourse from 'containers/ImmutableCourse/';
import ImmutableExercises from 'containers/ImmutableExercises/';
import ReduxCourse from 'containers/ReduxCourse/';
import ReduxExercises from 'containers/ReduxExercises/';
import Main from 'containers/Main/';
import ReactCourse from 'containers/ReactCourse/';
import TestingExercises from 'containers/TestingExercises/';
import WeatherStations from 'containers/WeatherStations/';
import ReactExercises from 'containers/ReactExercises/';
import ReactExercises2 from 'containers/ReactExercises/Exercise2';
import ReactExercises3 from 'containers/ReactExercises/Exercise3';
import ReactExercises4 from 'containers/ReactExercises/Exercise4';
import ReactExercises5 from 'containers/ReactExercises/Exercise5';

const routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ Main } />
    <Route path="/calculator" component={ Calculator } />
    <Route path="/ecma6" component={ Ecma6 } />
    <Route path="/ecma6exercises" component={ Ecma6Exercises } />
    <Route path="/reduxCourse/" component={ ReduxCourse } />
    <Route path="/reduxExercises" component={ ReduxExercises } />
    <Route path="/immutablecourse" component={ ImmutableCourse } />
    <Route path="/immutableexercises" component={ ImmutableExercises } />
    <Route path="/main" component={ Main } />
    <Route path="/reactcourse" component={ ReactCourse } />
    <Route path="/reactexercises/1" component={ ReactExercises } />
    <Route path="/reactexercises/2" component={ ReactExercises2 } />
    <Route path="/reactexercises/3" component={ ReactExercises3 } />
    <Route path="/reactexercises/4" component={ ReactExercises4 } />
    <Route path="/reactexercises/5" component={ ReactExercises5 } />
    <Route path="/testingexercises" component={ TestingExercises } />
    <Route path="/weatherstations" component={ WeatherStations } />
  </Route>
);

export default routes;
