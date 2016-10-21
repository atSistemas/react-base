import fetch from 'isomorphic-fetch';
import * as helpers from '../helpers';
import  config  from '../config';

export default {

  fetchWeatherStations() {

    const urlApi = config.WEATHER_API_URL + 
      '/station/find?lat=40.4165000&lon=-3.7025600&cnt=300&units=metric&appid=' +
       config.WEATHER_API_KEY;

    return fetch(urlApi)
    .then(req => req.json())
    .then(data => helpers.parseWeatherStations(data));
  },

  fetchWeatherStation(id) {
    const urlApi = config.WEATHER_API_URL + 
      '/station?id=' + id + '&units=metric&appid=' +
       config.WEATHER_API_KEY;

    return fetch(urlApi)
    .then(req => req.json())
    .then(data => helpers.parseWeatherStation(data) );
  },

  fetchWeather(lat, lng) {

    let urlCall = config.WEATHER_API_URL + 
      '/forecast/daily?lat=' + 
      lat +'&lon='+ 
      lng + '&cnt=8&lang=es&units=metric&appid=' +
      config.WEATHER_API_KEY;

    return fetch(urlCall)
    .then(req => req.json())
    .then(data => helpers.parseWeather(data) );

  }

};

