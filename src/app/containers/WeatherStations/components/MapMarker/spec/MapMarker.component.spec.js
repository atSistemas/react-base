import { expect } from 'chai';
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';

import weatherStationsMock from 'mocks/weatherStations.json';
import { MapMarker } from '../';


const setup = props => {

  const renderer = new ReactShallowRenderer();
  renderer.render(<MapMarker { ...props } />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
};

describe('component ', () => {
  describe('MapMarker', () => {
    it('should render correctly', () => {
      const props = {
        main: weatherStationsMock[0].main,
        zIndex: 2,
        $hover: true
      };

      const { output } = setup(props);
      expect(output.type).to.equal('div');
    });


    it('should render correctly hover false', () => {
      const props = {
        main: weatherStationsMock[0].main,
        zIndex: 2,
        $hover: false
      };

      const { output } = setup(props);
      expect(output.type).to.equal('div');
    });
  });
});
