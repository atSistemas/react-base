import { combineReducers } from 'redux';

import Calculator from 'containers/Calculator/reducers';
import Ecma6 from 'containers/Ecma6/reducers';
import Main from 'containers/Main/reducers';
import WeatherStations from 'containers/WeatherStations/reducers';

export default combineReducers({
  Calculator,
  Ecma6,
  Main,
  WeatherStations
});