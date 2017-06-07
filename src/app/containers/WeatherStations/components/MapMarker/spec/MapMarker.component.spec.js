import { expect } from 'chai';
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';

import MapMarker from '../';
import weatherStationsMock from 'mocks/weatherStations.json';


function setup(props) {

  function dispatch() { }

  let renderer = new ReactShallowRenderer();
  renderer.render(<MapMarker { ...props } />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('component ', () => {
  describe('MapMarker', () => {
    it('should render correctly', () => {
      let props = {
        main: weatherStationsMock[0].last.main,
        zIndex: 2,
        $hover: true
      };

      const { output } = setup(props);
      expect(output.type).to.equal('div');
    });


    it('should render correctly hover false', () => {
      let props = {
        main: weatherStationsMock[0].last.main,
        zIndex: 2,
        $hover: false
      };

      const { output } = setup(props);
      expect(output.type).to.equal('div');
    });
  });
});