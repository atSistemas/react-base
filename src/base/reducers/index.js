import { combineReducers } from 'redux';

import Calculator from 'containers/Calculator/reducers';
import Ecma6 from 'containers/Ecma6/reducers';
import Ecma6Exercises from 'containers/Ecma6Exercises/reducers';
import Main from 'containers/Main/reducers';
import ReactCourse from 'containers/ReactCourse/reducers';
import WeatherStations from 'containers/WeatherStations/reducers';

export default combineReducers({
  Calculator,
  Ecma6,
  Ecma6Exercises,
  Main,
  ReactCourse,
  WeatherStations
});