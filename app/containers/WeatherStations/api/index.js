import fetch from 'isomorphic-fetch';
import { WeatherStationsModel, ActualWeatherModel } from '../models';
import { generateMap } from 'shared/ModelHelper';
import { config } from '../config.js';

export default {

  fetchWeatherStations(){

    const urlApi = config.WEATHER_API_URL + 
      '/station/find?lat=40.4165000&lon=-3.7025600&cnt=300&units=metric&appid=' +
       config.WEATHER_API_KEY;
    return fetch(urlApi)
    .then(req => req.json())
    .then(data => {     
      for (let i=0; i<data.length; i++){
        data[i].id = i + 1;
      }
      return generateMap(data, WeatherStationsModel);
    });
  },

  fetchWeather(lat, lng){

    let urlCall = config.WEATHER_API_URL + 
      '/forecast/daily?lat=' + 
      lat +'&lon='+ 
      lng + '&cnt=8&lang=es&units=metric&appid=' +
      config.WEATHER_API_KEY;

    return fetch(urlCall)
    .then(req => req.json())
    .then(data => {     
      for (let i=0; i<data.list.
        length; i++){
        data.list[i].id = i + 1;
      }
      return generateMap(data.list, ActualWeatherModel);
    });

  }

};
