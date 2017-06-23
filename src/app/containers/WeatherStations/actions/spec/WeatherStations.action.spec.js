import { expect } from 'chai';
import * as Actions from '../';
import ActionTypes from '../../actionTypes';

import api from '../../api';

describe('Actions', () => {
  describe('Actions WeatherStations', () => {
    it('Should create action getWeatherStations', () => {

      const params = {};
      const expectedAction = {
        type: ActionTypes.WEATHERSTATIONS_REQUEST,
        request: api.fetchWeatherStations(params)
      };

      expect(Actions.getWeatherStations(params)).to.deep.equal(expectedAction);

    });

    it('Should create action weatherStationSelected', () => {

      const id = 15;
      const expectedAction = {
        type: ActionTypes.WEATHERSTATION_SELECTED,
        id: id
      };

      expect(Actions.weatherStationSelected(id)).to.deep.equal(expectedAction);

    });

    it('Should create action getWeatherStation', () => {
      const id = 15;
      const expectedAction = {
        type: ActionTypes.WEATHERSTATION_REQUEST,
        request: api.fetchWeatherStation(id)
      };

      expect(Actions.getWeatherStation(id)).to.deep.equal(expectedAction);

    });


    it('Should create action getWeather', () => {

      const params= {
        lat: 0,
        lng: 0
      };

      const expectedAction = {
        type: ActionTypes.FORECAST_REQUEST,
        request: api.fetchWeather(params.lat, params.lng)
      };

      expect(Actions.getWeather(params.lat, params.lng)).to.deep.equal(expectedAction);

    });

  });
});
