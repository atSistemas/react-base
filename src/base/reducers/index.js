import { combineReducers } from 'redux';

import Calculator from 'containers/Calculator/reducers';
import Ecma6 from 'containers/Ecma6/reducers';
import Ecma6Exercises from 'containers/Ecma6Exercises/reducers';
import ImmutableCourse from 'containers/ImmutableCourse/reducers';
import ImmutableExercises from 'containers/ImmutableExercises/reducers';
import Main from 'containers/Main/reducers';
import ReactCourse from 'containers/ReactCourse/reducers';
import ReactExercises from 'containers/ReactExercises/reducers';
import ReduxExercises from 'containers/ReduxExercises/reducers';
import TestingExercises from 'containers/TestingExercises/reducers';
import WeatherStations from 'containers/WeatherStations/reducers';

export default combineReducers({
  Calculator,
  Ecma6,
  Ecma6Exercises,
  ImmutableCourse,
  ImmutableExercises,
  Main,
  ReactCourse,
  ReactExercises,
  ReduxExercises,
  TestingExercises,
  WeatherStations
});