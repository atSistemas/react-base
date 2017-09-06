import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { WeatherStationsCollection } from '../models';

const weatherStationsRequest = state => state; 

const weatherStationsError = state => state;

const weatherStationsSuccess = (state, action) => (
  state
    .update ('data', () => action.payload)
    .set('stationSelected', -1)
);

const weatherStationSelected = (state, action) => (
  state.set('stationSelected', action.id)
);

const weatherStationRequest = state => state;

const weatherStationError = state => state;

const weatherStationSuccess = (state, action) => (
  state.update ('weatherStationDetails', () =>  action.payload)
);

const forecastRequest = state => state;

const forecastError = state => state;

const forecastSuccess = (state, action) => (
  state.update ('forecast', () => action.payload)
);

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
