import Types from '../types';
import api from '../api';
import { generateFetchTypes } from 'shared/TypeHelper';

export function getWeatherStations( { params } ){
  return {
    types: generateFetchTypes(Types.WEATHERSTATIONS_REQUEST),
    request: api.fetchWeatherStations(params)
  };
}

export function weatherStationSelected( id ){
  return {
    type: Types.WEATHERSTATION_SELECTED,
    id
  };
}

export function getWeather( lat, lng ){
  return {
    types: generateFetchTypes(Types.ACTUALWEATHER_REQUEST),
    request: api.fetchWeather(lat, lng)
  };
}