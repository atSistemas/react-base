import fetch from 'isomorphic-fetch';
import { generateMap } from 'shared/ModelHelper';
import { WeatherStationsModel, ForecastModel, WeatherStationDetailsModel } from '../models';
import  config  from '../config';

export default {

  fetchWeatherStations(){

    const urlApi = config.WEATHER_API_URL + 
      '/station/find?lat=40.4165000&lon=-3.7025600&cnt=300&units=metric&appid=' +
       config.WEATHER_API_KEY;
    return fetch(urlApi)
    .then(req => req.json())
    .then(data => {     
      for (let i = 0; i < data.length; i++){
        data[i].id = i + 1;
        data[i].stationId = data[i].station.id;
      }
      return generateMap(data, WeatherStationsModel);
    });
  },

  fetchWeatherStation(id){
    const urlApi = config.WEATHER_API_URL + 
      '/station?id=' + id + '&units=metric&appid=' +
       config.WEATHER_API_KEY;
    return fetch(urlApi)
    .then(req => req.json())
    .then(data =>{
      const dataParsed = this.getDataWeatherStation(data);
      return generateMap(dataParsed, WeatherStationDetailsModel);
    } );
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
      for (let i=0; i<data.list.length; i++){
        data.list[i].id = i + 1;
      }
      return generateMap(data.list, ForecastModel);
    });

  },

  getDataWeatherStation(data){
    let obj = {};
    if (data.params.indexOf('temp') > -1){
      obj.temp = data.last.main.temp;
    }

    if (data.params.indexOf('humidity') > -1){
      obj.humidity = data.last.main.humidity;
    }  
    
    if (data.params.indexOf('pressure') > -1){
      obj.pressure = data.last.main.pressure;
    }  
    
    if (data.params.indexOf('wind') > -1){
      obj.wind = data.last.wind;
    }  

    if (data.params.indexOf('visibility') > -1){
      obj.visibility = data.last.visibility;
    }

    if (data.params.indexOf('rain') > -1){
      obj.rain = data.last.rain;
    }

    obj.id = data.station.id;
    obj.dt = data.last.dt;

    let list = [obj];

    return list;

  }

};

