import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { generateMap } from 'base/shared/ModelHelper';

import { TestingExercisesModel, setInitialState } from '../models';
import { TestingExercises } from '..';

const mockData = [
  {
    "id": 1,
    "alt": "React Base!",
    "name": "ReactBaseLogo",
    "width": 500,
    "url": "/assets/images/react-base-logo.png"
  }
];

const mockDataImmutable2= generateMap(mockData,TestingExercisesModel );

function setup() {

  function dispatch() { }
  let initialState = {
      TestingExercises: {
        data: mockData
      }
  };

  let props = {
    dispatch: dispatch,
    TestingExercisesModel: setInitialState(initialState)
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<TestingExercises {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('containers', () => {
  describe('TestingExercises', () => {
   /* it('should render correctly', () => {
      const { output } = setup();
       expect(output.props.name).toBe('TestingExercises');

    });*/
  });
});