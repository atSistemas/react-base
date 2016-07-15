import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { generateMap } from 'shared/ModelHelper';

import { WeatherStationsModel, setInitialState } from '../models';
import { WeatherStations } from '..';

const mockData = [
  {
    "id": 1,
    "alt": "React Base!",
    "name": "ReactBaseLogo",
    "width": 500,
    "url": "/assets/images/react-base-logo.png"
  }
];

const mockDataImmutable2= generateMap(mockData,WeatherStationsModel );

function setup() {

  function dispatch() { }
  let initialState = {
      WeatherStations: {
        data: mockData
      }
  };

  let props = {
    dispatch: dispatch,
    WeatherStationsModel: setInitialState(initialState)
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<WeatherStations {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('containers', () => {
  describe('WeatherStations', () => {
   /* it('should render correctly', () => {
      const { output } = setup();
       expect(output.props.name).toBe('WeatherStations');

    });*/
  });
});