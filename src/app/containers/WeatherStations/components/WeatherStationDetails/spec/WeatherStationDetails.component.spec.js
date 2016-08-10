import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import WeatherStationDetails  from '../';
import WeatherStationMock from 'mocks/weatherStation.json';

import api from '../../../api'
import { WeatherStationDetailsModel } from '../../../models';
import { generateMap } from 'base/shared/ModelHelper';

function setup(props) {

  function dispatch() { }

  let renderer = TestUtils.createRenderer();
  renderer.render(<WeatherStationDetails { ...props }  />);
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

      let item =  api.getDataWeatherStation(WeatherStationMock);

      let itemMap = generateMap(item, WeatherStationDetailsModel)
      
      let element = itemMap.keySeq().first();
      
      let props ={
        details:  itemMap.get(element)
      };       

      const { output } = setup(props);
      expect(output.type).to.equal('div');
    });


  });
});