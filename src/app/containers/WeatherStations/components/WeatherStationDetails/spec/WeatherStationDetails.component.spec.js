import { expect } from 'chai';
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';

import WeatherStationDetails from '../';
import WeatherStationMock from 'mocks/weatherStation.json';

import * as helpers from '../../../helpers';
import { WeatherStationDetailsModel } from '../../../models';
import { generateMap } from 'base/shared/ModelHelper';

function setup(props) {

  function dispatch() { }

  let renderer = new ReactShallowRenderer();
  renderer.render(<WeatherStationDetails { ...props } />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('component ', () => {
  describe('WeatherStationDetails', () => {
    it('should render correctly', () => {

      let item = helpers.getDataWeatherStation(WeatherStationMock);

      let itemMap = generateMap(item, WeatherStationDetailsModel)

      let element = itemMap.keySeq().first();

      let props = {
        details: itemMap.get(element)
      };

      const { output } = setup(props);
      expect(output.type).to.equal('div');
    });


  });
});