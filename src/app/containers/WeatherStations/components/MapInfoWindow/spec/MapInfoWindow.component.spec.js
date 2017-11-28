import { expect } from 'chai';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import weatherStationsMock from 'mocks/weatherStations.json';

import { MapInfoWindow } from '../';

const setup = data => {

  const props = {
    main: data
  };

  const renderer = new ShallowRenderer();
  renderer.render(<MapInfoWindow { ...props } />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
};

describe('component ', () => {
  describe('MapInfoWindow', () => {
    it('should render correctly', () => {
      const { output } = setup(weatherStationsMock[0].main);
      expect(output.type).to.equal('div');
    });

    it('should render with data incompconste', () => {
      const { output } = setup(weatherStationsMock[1].main);
      expect(output.type).to.equal('div');
    });

    it('should render data not found', () => {
      const { output } = setup(weatherStationsMock[2].main);
      expect(output.type).to.equal('div');
    });
  });
});
