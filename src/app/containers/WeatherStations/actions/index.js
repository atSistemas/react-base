import api from '../api';
import ActionTypes from '../actionTypes';

export const getWeatherStations = ({ params }) => ({
  type: ActionTypes.WEATHERSTATIONS_REQUEST,
  request: api.fetchWeatherStations(params)
});

export const weatherStationSelected = id => ({
  type: ActionTypes.WEATHERSTATION_SELECTED,
  id: id
});

export const getWeatherStation = id => ({
  type: ActionTypes.WEATHERSTATION_REQUEST,
  request: api.fetchWeatherStation(id)
});

export const getWeather = (lat, lng) => ({
  type: ActionTypes.FORECAST_REQUEST,
  request: api.fetchWeather(lat, lng)
});

