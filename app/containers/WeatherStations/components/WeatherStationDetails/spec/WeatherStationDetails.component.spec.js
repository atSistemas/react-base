import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import WeatherStationDetails  from '../';
import WeatherStationMock from 'app/api/mocks/weatherStation.json';

import api from '../../../api'
import { WeatherStationDetailsModel } from '../../../models';
import { generateMap } from 'shared/ModelHelper';

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
      expect(output.type).toBe('div');
    });


  });
});