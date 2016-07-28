import Types from '../types';
import CreateReducer from 'shared/CreateReducer';
import { WeatherStationsCollection } from '../models';

function weatherStationsRequest ( state ) { return state; }

function weatherStationsError ( state ) { return state; }

function weatherStationsSuccess ( state, action ) {
  state.set('stationSelected', -1);
  return state.update ( 'data', () => action.result );
}

function weatherStationSelected( state, action ) {
  return state.set('stationSelected', action.id);
}

function weatherStationRequest ( state ) { return state; }

function weatherStationError ( state ) { return state; }

function weatherStationSuccess ( state, action ) {
  return state.update ( 'weatherStationDetails', () =>  action.result);
}

function actualWeatherRequest ( state ) { return state; }

function actualWeatherError ( state ) { return state; }

function actualWeatherSuccess ( state, action ) {
  return state.update ( 'actualWeather', () => action.result );
}

const actionHandlers = {
  [Types.WEATHERSTATIONS_REQUEST]: weatherStationsRequest,
  [Types.WEATHERSTATIONS_SUCCESS]: weatherStationsSuccess,
  [Types.WEATHERSTATIONS_ERROR]: weatherStationsError,
  [Types.WEATHERSTATION_REQUEST]: weatherStationRequest,
  [Types.WEATHERSTATION_SUCCESS]: weatherStationSuccess,
  [Types.WEATHERSTATION_ERROR]: weatherStationError,
  [Types.WEATHERSTATION_SELECTED]: weatherStationSelected,  
  [Types.ACTUALWEATHER_REQUEST]: actualWeatherRequest,
  [Types.ACTUALWEATHER_SUCCESS]: actualWeatherSuccess,
  [Types.ACTUALWEATHER_ERROR]: actualWeatherError,
};

export default CreateReducer(actionHandlers, new WeatherStationsCollection());
