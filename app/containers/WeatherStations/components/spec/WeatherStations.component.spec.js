import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import WeatherStations from '../';

function setup() {
  let props = {
    
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<WeatherStations />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('components', () => {
  describe('WeatherStations component', () => {
   /* it('should render correctly', () => {
      const { output, renderer } = setup();

      expect(output.type).toBe('div');
    });*/
  });
});