import fetch from 'isomorphic-fetch';
import * as helpers from '../helpers';
import  config  from '../config';

export default {

  fetchWeatherStations() {
    const urlApi = config.WEATHER_API_URL + 
      '/box/city?bbox=-9,36.6,2.22,43,10&appid=' +
      config.WEATHER_API_KEY;

    return fetch(urlApi)
    .then(req => req.json())
    .then(data => helpers.parseWeatherStations(data.list));
  },

  fetchWeatherStation(id) {
    const urlApi = config.WEATHER_API_URL + 
      '/station?id=' + id + '&units=metric&appid=' +
       config.WEATHER_API_KEY;

    return fetch(urlApi)
    .then(req => req.json())
    .then(data => helpers.parseWeatherStation(data));
  },

  fetchWeather(lat, lng) {

    let urlCall = config.WEATHER_API_URL + 
      '/forecast/daily?lat=' + 
      lat +'&lon='+ 
      lng + '&cnt=8&lang=es&units=metric&appid=' +
      config.WEATHER_API_KEY;

    return fetch(urlCall)
    .then(req => req.json())
    .then(data => helpers.parseWeather(data));

  }

};

