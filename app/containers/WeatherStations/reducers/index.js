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

function forecastRequest ( state ) { return state; }

function forecastError ( state ) { return state; }

function forecastSuccess ( state, action ) {
  return state.update ( 'forecast', () => action.result );
}

const actionHandlers = {
  [Types.WEATHERSTATIONS_REQUEST]: weatherStationsRequest,
  [Types.WEATHERSTATIONS_SUCCESS]: weatherStationsSuccess,
  [Types.WEATHERSTATIONS_ERROR]: weatherStationsError,
  [Types.WEATHERSTATION_REQUEST]: weatherStationRequest,
  [Types.WEATHERSTATION_SUCCESS]: weatherStationSuccess,
  [Types.WEATHERSTATION_ERROR]: weatherStationError,
  [Types.WEATHERSTATION_SELECTED]: weatherStationSelected,  
  [Types.FORECAST_REQUEST]: forecastRequest,
  [Types.FORECAST_SUCCESS]: forecastSuccess,
  [Types.FORECAST_ERROR]: forecastError,
};

export default CreateReducer(actionHandlers, new WeatherStationsCollection());
