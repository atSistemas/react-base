import { expect } from 'chai';
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';

import { ForecastDetail } from '../';
import ForecastMock from 'mocks/forecast.json';
import { generateMap } from 'base/shared/ModelHelper';
import { ForecastModel } from '../../../models';

function setup(props) {

  function dispatch() { }

  let renderer = new ReactShallowRenderer();
  renderer.render(<ForecastDetail { ...props } />);
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

      let props = {
        Forecast: generateMap(ForecastMock.list, ForecastModel),
        StationSelected: 14
      };

      const { output } = setup(props);

      expect(output.type).to.equal('div');
      expect(output.props.children[1].size).to.equal(8);
    });

    it('should render correctly station not selected', () => {

      let props = {
        Forecast: generateMap(ForecastMock.list, ForecastModel),
        StationSelected: -1
      };

      const { output } = setup(props);
      expect(output.type).to.equal('div');
    });

  });
});