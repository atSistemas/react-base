import { expect } from 'chai';
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';

import weatherStationsMock from 'mocks/weatherStations.json';

import { MapBox } from '../';
import * as helpers from '../../../helpers';

const setup = props => {

  let renderer = new ReactShallowRenderer();
  renderer.render(<MapBox { ...props } />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
};

describe('component ', () => {
  describe('MapBox', () => {
    it('should render correctly', () => {

      const parsedWeatherStation = helpers.parseWeatherStations(weatherStationsMock);
      console.log("qweqwe: =>", parsedWeatherStation.toJS());

      let props = {
        stations: parsedWeatherStation,
        stationSelected: 14
      };

      const { output } = setup(props);

      expect(output.type).to.equal('div');
    });

  });
});
