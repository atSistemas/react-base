import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { WeatherStationsCollection } from '../models';

function weatherStationsRequest ( state ) { return state; }

function weatherStationsError ( state ) { return state; }

function weatherStationsSuccess ( state, action ) {
  return state
    .update ( 'data', () => action.payload )
    .set('stationSelected', -1);
}

function weatherStationSelected( state, action ) {
  return state.set('stationSelected', action.id);
}

function weatherStationRequest ( state ) { return state; }

function weatherStationError ( state ) { return state; }

function weatherStationSuccess ( state, action ) {
  return state.update ( 'weatherStationDetails', () =>  action.payload);
}

function forecastRequest ( state ) { return state; }

function forecastError ( state ) { return state; }

function forecastSuccess ( state, action ) {
  return state.update ( 'forecast', () => action.payload );
}

const actionHandlers = {
  [ActionTypes.WEATHERSTATIONS_REQUEST]: weatherStationsRequest,
  [ActionTypes.WEATHERSTATIONS_SUCCESS]: weatherStationsSuccess,
  [ActionTypes.WEATHERSTATIONS_ERROR]: weatherStationsError,
  [ActionTypes.WEATHERSTATION_REQUEST]: weatherStationRequest,
  [ActionTypes.WEATHERSTATION_SUCCESS]: weatherStationSuccess,
  [ActionTypes.WEATHERSTATION_ERROR]: weatherStationError,
  [ActionTypes.WEATHERSTATION_SELECTED]: weatherStationSelected,  
  [ActionTypes.FORECAST_REQUEST]: forecastRequest,
  [ActionTypes.FORECAST_SUCCESS]: forecastSuccess,
  [ActionTypes.FORECAST_ERROR]: forecastError,
};

export default createReducer(actionHandlers, new WeatherStationsCollection());
