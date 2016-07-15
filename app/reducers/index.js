import { combineReducers } from 'redux';

import Main from 'containers/Main/reducers';
import WeatherStations from 'containers/WeatherStations/reducers';

export default combineReducers({
  Main,
  WeatherStations
});