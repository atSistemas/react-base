import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import MapMarker  from '../';
import weatherStationsMock from 'app/api/mocks/weatherStations.json';


function setup(props) {

  function dispatch() { }
  
  let renderer = TestUtils.createRenderer();
  renderer.render(<MapMarker { ...props }  />);
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
      let props ={
          main: weatherStationsMock[0].last.main,
          zIndex: 2,
          $hover: true
        }; 

      const { output } = setup(props);
      expect(output.type).toBe('div');
    });


    it('should render correctly hover false', () => {
      let props ={
          main: weatherStationsMock[0].last.main,
          zIndex: 2,
          $hover: false
        }; 
      
      const { output } = setup(props);
      expect(output.type).toBe('div');
    });
  });
});