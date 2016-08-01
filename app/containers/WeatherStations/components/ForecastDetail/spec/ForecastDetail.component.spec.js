import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import { ForecastDetail }  from '../';
import ForecastMock from 'app/api/mocks/forecast.json';
import { generateMap } from 'shared/ModelHelper';
import { ForecastModel } from '../../../models';

function setup(props) {

  function dispatch() { }

  let renderer = TestUtils.createRenderer();
  renderer.render(<ForecastDetail { ...props }  />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('component ', () => {
  describe('ForecastDetail', () => {
    it('should render correctly', () => {

      let props ={
        Forecast: generateMap(ForecastMock.list, ForecastModel),
        StationSelected: 14
      };       

      const { output } = setup(props);
      expect(output.type).toBe('div');
    });

    it('should render correctly station not selected', () => {

      let props ={
        Forecast: generateMap(ForecastMock.list, ForecastModel),
        StationSelected: -1
      };       

      const { output } = setup(props);
      expect(output.type).toBe('div');
    });

  });
});