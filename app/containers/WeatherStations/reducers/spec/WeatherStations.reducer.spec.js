import expect from 'expect';
import reducer from '../';
import types from '../../types';
import weatherStationsMock from 'app/api/mocks/weatherStations.json';
import weatherStationMock from 'app/api/mocks/weatherStation.json';
import actualWeatherMock from 'app/api/mocks/actualWeather.json';

import api from '../../api'

import { WeatherStationsCollection, WeatherStationsModel, WeatherStationModel, ActualWeatherModel } from '../../models';
import { generateMap } from 'shared/ModelHelper';

describe('Reducers', () => {
  describe('WeatherStations reducer', () => {

    it('Should return the initial state', () => {

      const action = {
        type: types.WEATHERSTATIONS_REQUEST
      };

      expect(reducer([], action)).toEqual([]);
    });

    it('Should return the state WeatherStations updated request successfull', () => {

      const data = [weatherStationsMock.list[0], weatherStationsMock.list[1]]

      const action = {
        type: types.WEATHERSTATIONS_SUCCESS,
        result: generateMap(data, WeatherStationsModel)
      };

      const model = new WeatherStationsCollection();

      const returnedData = reducer(model, action).get('data');

      let element = returnedData.keySeq().first();

      expect(returnedData.get(element).id).toEqual(data[0].id );
    });


    it('should return the state of WeatherStations request fail', () => {

      const action = {
        type: types.WEATHERSTATIONS_ERROR
      };

      expect(reducer([], action)).toEqual([]);
    });


    it('Should return the initial state when request WeatherStation ', () => {

      const action = {
        type: types.WEATHERSTATION_REQUEST
      };

      expect(reducer([], action)).toEqual([]);
    });

    it('Should return the state WeatherStation updated request successfull', () => {


      const action = {
        type: types.WEATHERSTATION_SUCCESS,
        result: api.getDataWeatherStation(weatherStationMock)
      };

      const model = new WeatherStationsCollection();

      const returnedData = reducer(model, action).get('weatherStationDetails');

      let element = returnedData.keySeq().first();

      expect(returnedData.get(element).id).toEqual(weatherStationMock.station.id );
    });


    it('should return the state of WeatherStation request fail', () => {

      const action = {
        type: types.WEATHERSTATION_ERROR
      };

      expect(reducer([], action)).toEqual([]);
    });

    it('Should return the initial state when request actualWeather ', () => {

      const action = {
        type: types.ACTUALWEATHER_REQUEST
      };

      expect(reducer([], action)).toEqual([]);
    });

    it('Should return the state actualWeather updated request successfull', () => {

      const action = {
        type: types.ACTUALWEATHER_SUCCESS,
        result: generateMap(actualWeatherMock.list, ActualWeatherModel)
      };
      const model = new WeatherStationsCollection();

      const returnedData = reducer(model, action).get('actualWeather');

      let element = returnedData.keySeq().first();
      
      expect(returnedData.get(element).dt).toEqual(actualWeatherMock.list[0].dt);
    });


    it('should return the state of actualWeather request fail', () => {

      const action = {
        type: types.ACTUALWEATHER_ERROR
      };

      expect(reducer([], action)).toEqual([]);
    });

    it('should return the state of station selected', () => {

      const action = {
        type: types.WEATHERSTATION_SELECTED,
        id: 15
      };

      const model = new WeatherStationsCollection();

      const returnedData = reducer(model, action).get('stationSelected');

      expect(returnedData).toEqual(15);
    });



  });
});
