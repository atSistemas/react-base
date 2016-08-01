import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import { MapBox } from '../';
import weatherStationsMock from 'app/api/mocks/weatherStations.json';
import { WeatherStationsModel, setInitialState } from '../../../models';


function setup() {

  function dispatch() { }
  let initialState = {
      WeatherStations: {
        data: weatherStationsMock,
        StationSelected: 15,
        forecast:{},
        weatherStationDetails:{}
      }
  };
  let initialStateProps = setInitialState(initialState);

  let props = {
    dispatch: dispatch,
    Stations: initialStateProps.data,
    StationSelected: initialStateProps.stationSelected
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<MapBox {...props}  />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('component ', () => {
  describe('MapBox', () => {
    it('should render correctly', () => {
      const { output } = setup();
      expect(output.type).toBe('div');
    });
  });
});