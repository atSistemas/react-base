import { expect } from 'chai';
import Immutable from 'immutable';
import weatherStationsMock from 'mocks/weatherStations.json';
import weatherStationMock from 'mocks/weatherStation.json';
import ForecastMock from 'mocks/forecast.json';

import * as helpers from '..';

describe('Helpers', () => {
  describe('WeatherStations helpers', () => {

    it('parseWeatherStations return a Map of instances of WeatherStationsModel',() =>{

      const returnedValue = helpers.parseWeatherStations(weatherStationsMock);

      expect(Immutable.Map.isMap(returnedValue)).to.equal(true);

      const item = returnedValue.first();
      
      expect(item.get('id')).to.equal(weatherStationsMock[0].id);
      expect(item.get('stationId')).to.equal(weatherStationsMock[0].stationId);
      expect(item.get('distance')).to.equal(weatherStationsMock[0].distance);
      expect(typeof(item.get('last'))).to.equal('object');
      expect(typeof(item.get('station'))).to.equal('object');

    });

    it('parseWeatherStation return a Map of instances of WeatherStationDetailsModel',() =>{

      const returnedValue = helpers.parseWeatherStation(weatherStationMock);

      const item = returnedValue.first();

      expect(item.get('temp')).to.equal(weatherStationMock.last.main.temp);
      expect(item.get('pressure')).to.equal(weatherStationMock.last.main.pressure);
      expect(item.get('humidity')).to.equal(weatherStationMock.last.main.humidity);
      expect(typeof(item.get('wind'))).to.equal('object');
      expect(typeof(item.get('visibility'))).to.equal('object');
      expect(typeof(item.get('rain'))).to.equal('object');
      expect(item.get('dt')).to.equal(weatherStationMock.last.dt);

    });

    it('parseWeather return a Map of instances of ForecastModel',() =>{

      const returnedValue = helpers.parseWeather(ForecastMock);

      const item = returnedValue.first();
      expect(item.get('clouds')).to.equal(ForecastMock.list[0].clouds);
      expect(item.get('deg')).to.equal(ForecastMock.list[0].deg);
      expect(item.get('dt')).to.equal(ForecastMock.list[0].dt);

      expect(item.get('humidity')).to.equal(ForecastMock.list[0].humidity);
      expect(item.get('pressure')).to.equal(ForecastMock.list[0].pressure);
      expect(item.get('speed')).to.equal(ForecastMock.list[0].speed);
      expect(typeof(item.get('temp'))).to.equal('object');
      expect(typeof(item.get('weather'))).to.equal('object');

    });

  });
});
