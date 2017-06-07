import { expect } from 'chai';
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';

import MapInfoWindow from '../';
import weatherStationsMock from 'mocks/weatherStations.json';

function setup(data) {

  function dispatch() { }

  let props = {
    main: data
  };

  let renderer = new ReactShallowRenderer();
  renderer.render(<MapInfoWindow { ...props } />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('component ', () => {
  describe('MapInfoWindow', () => {
    it('should render correctly', () => {
      const { output } = setup(weatherStationsMock[0].last.main);
      expect(output.type).to.equal('div');
    });

    it('should render with data incomplete', () => {
      const { output } = setup(weatherStationsMock[1].last.main);
      expect(output.type).to.equal('div');
    });

    it('should render data not found', () => {
      const { output } = setup(weatherStationsMock[2].last.main);
      expect(output.type).to.equal('div');
    });
  });
});