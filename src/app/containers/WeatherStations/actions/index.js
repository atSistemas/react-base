import { generateFetchTypes } from 'base/shared/TypeHelper';
import Types from '../types';
import api from '../api';

export function getWeatherStations( { params } ){
  return {
    types: generateFetchTypes(Types.WEATHERSTATIONS_REQUEST),
    request: api.fetchWeatherStations(params)
  };
}

export function weatherStationSelected( id ){
  return {
    type: Types.WEATHERSTATION_SELECTED,
    id: id
  };
}

export function getWeatherStation( id ){
  return {
    types: generateFetchTypes(Types.WEATHERSTATION_REQUEST),
    request: api.fetchWeatherStation( id )
  };
}


export function getWeather( lat, lng ){
  return {
    types: generateFetchTypes(Types.FORECAST_REQUEST),
    request: api.fetchWeather(lat, lng)
  };
}

