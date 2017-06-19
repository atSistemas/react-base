import { combineReducers } from 'redux';

import Calculator from 'containers/Calculator/reducers';
import Ecma6Exercises from 'containers/Ecma6Exercises/reducers';
import ImmutableExercises from 'containers/ImmutableExercises/reducers';
import Main from 'containers/Main/reducers';
import ReactExercises from 'containers/ReactExercises/reducers';
import ReduxExercises from 'containers/ReduxExercises/reducers';
import TestingExercises from 'containers/TestingExercises/reducers';
import WeatherStations from 'containers/WeatherStations/reducers';

export default combineReducers({
  Calculator,
  Ecma6Exercises,
  ImmutableExercises,
  Main,
  ReactExercises,
  ReduxExercises,
  TestingExercises,
  WeatherStations
});