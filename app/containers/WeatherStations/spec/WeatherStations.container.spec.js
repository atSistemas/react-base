import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import { WeatherStationsModel, setInitialState } from '../models';
import { WeatherStations } from '..';
import weatherStationsMock from 'app/api/mocks/weatherStations.json';
import weatherStationMock from 'app/api/mocks/weatherStation.json';
import forecastMock from 'app/api/mocks/forecast.json';

import api from '../api';

function setup() {

  function dispatch() { }
  let initialState = {
      WeatherStations: {
        data: weatherStationsMock.list,
        forecast:forecastMock.list,
        weatherStationDetails: api.getDataWeatherStation(weatherStationMock),
        StationSelected: 15
      }
  };

  let initialStateProps = setInitialState(initialState);

  let props = {
    dispatch: dispatch,
    WeatherStationsModel: initialStateProps,
    WeatherStationDetailsState : initialStateProps.weatherStationDetails,
    StationSelected: initialStateProps.stationSelected
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<WeatherStations {...props}  />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('containers', () => {
  describe('WeatherStations', () => {
    it('should render correctly', () => {
      const { output } = setup();
      expect(output.type).toBe('div');
    });
  });
});