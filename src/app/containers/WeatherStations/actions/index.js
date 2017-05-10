import { generateFetchTypes } from 'base';
import api from '../api';
import ActionTypes from '../actionTypes';

export function getWeatherStations( { params } ) {
  return {
    types: generateFetchTypes(ActionTypes.WEATHERSTATIONS_REQUEST),
    request: api.fetchWeatherStations(params)
  };
}

export function weatherStationSelected( id ) {
  return {
    type: ActionTypes.WEATHERSTATION_SELECTED,
    id: id
  };
}

export function getWeatherStation( id ) {
  return {
    types: generateFetchTypes(ActionTypes.WEATHERSTATION_REQUEST),
    request: api.fetchWeatherStation( id )
  };
}


export function getWeather( lat, lng ) {
  return {
    types: generateFetchTypes(ActionTypes.FORECAST_REQUEST),
    request: api.fetchWeather(lat, lng)
  };
}

