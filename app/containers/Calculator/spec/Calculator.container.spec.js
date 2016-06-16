import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { generateMap } from 'shared/ModelHelper';

import { CalculatorModel, setInitialState } from '../models';
import { Calculator } from '..';

const mockData = [
  {
    "id": 1,
    "alt": "React Base!",
    "name": "ReactBaseLogo",
    "width": 500,
    "url": "/assets/images/react-base-logo.png"
  }
];

const mockDataImmutable2= generateMap(mockData,CalculatorModel );

function setup() {

  function dispatch() { }
  let initialState = {
      Calculator: {
        data: mockData
      }
  };

  let props = {
    dispatch: dispatch,
    Calculator: setInitialState(initialState)
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<Calculator {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('containers', () => {
  describe('Calculator', () => {
    it('should render correctly', () => {
      const { output } = setup();
       expect(output.props.name).toBe('Calculator');

    });
  });
});