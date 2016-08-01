import expect from 'expect';
import reducer from '../';
import types from '../../types';
import weatherStationsMock from 'app/api/mocks/weatherStations.json';
import weatherStationMock from 'app/api/mocks/weatherStation.json';
import ForecastMock from 'app/api/mocks/forecast.json';

import api from '../../api'

import { WeatherStationsCollection, WeatherStationsModel, WeatherStationModel, ForecastModel } from '../../models';
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

      const data = [weatherStationsMock[0], weatherStationsMock[1]]

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


      expect(returnedData[0].id).toEqual(weatherStationMock.station.id );
    });


    it('should return the state of WeatherStation request fail', () => {

      const action = {
        type: types.WEATHERSTATION_ERROR
      };

      expect(reducer([], action)).toEqual([]);
    });

    it('Should return the initial state when request forecast ', () => {

      const action = {
        type: types.FORECAST_REQUEST
      };

      expect(reducer([], action)).toEqual([]);
    });

    it('Should return the state forecast updated request successfull', () => {

      const action = {
        type: types.FORECAST_SUCCESS,
        result: generateMap(ForecastMock.list, ForecastModel)
      };
      const model = new WeatherStationsCollection();

      const returnedData = reducer(model, action).get('forecast');
      let element = returnedData.keySeq().first();
      
      expect(returnedData.get(element).dt).toEqual(ForecastMock.list[0].dt);
    });


    it('should return the state of forecast request fail', () => {

      const action = {
        type: types.FORECAST_ERROR
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
