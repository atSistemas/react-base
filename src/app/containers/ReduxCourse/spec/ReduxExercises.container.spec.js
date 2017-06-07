import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { generateMap } from 'base/shared/ModelHelper';

import { ReduxExercisesModel, setInitialState } from '../models';
import { ReduxExercises } from '..';

const mockData = [
  {
    "id": 1,
    "alt": "React Base!",
    "name": "ReactBaseLogo",
    "width": 500,
    "url": "/assets/images/react-base-logo.png"
  }
];

const mockDataImmutable2= generateMap(mockData,ReduxExercisesModel );

function setup() {

  function dispatch() { }
  let initialState = {
      ReduxExercises: {
        data: mockData
      }
  };

  let props = {
    dispatch: dispatch,
    ReduxExercisesModel: setInitialState(initialState)
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<ReduxExercises {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('containers', () => {
  describe('ReduxExercises', () => {
   /* it('should render correctly', () => {
      const { output } = setup();
       expect(output.props.name).toBe('ReduxExercises');

    });*/
  });
});