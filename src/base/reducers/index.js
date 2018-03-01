import { combineReducers } from 'redux'

import Calculator from 'containers/Calculator/reducers'
import Main from 'containers/Main/reducers'
import Todo from 'containers/Todo/reducers'
import WeatherStations from 'containers/WeatherStations/reducers'

export default combineReducers({
  Calculator,
  Main,
  Todo,
  WeatherStations

})
