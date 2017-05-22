import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { generateMap } from 'base/shared/ModelHelper';

import { Ecma6Model, setInitialState } from '../models';
import { Ecma6 } from '..';

const mockData = [
  {
    "id": 1,
    "alt": "React Base!",
    "name": "ReactBaseLogo",
    "width": 500,
    "url": "/assets/images/react-base-logo.png"
  }
];

const mockDataImmutable2= generateMap(mockData,Ecma6Model );

function setup() {

  function dispatch() { }
  let initialState = {
      Ecma6: {
        data: mockData
      }
  };

  let props = {
    dispatch: dispatch,
    Ecma6Model: setInitialState(initialState)
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<Ecma6 {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('containers', () => {
  describe('Ecma6', () => {
   /* it('should render correctly', () => {
      const { output } = setup();
       expect(output.props.name).toBe('Ecma6');

    });*/
  });
});