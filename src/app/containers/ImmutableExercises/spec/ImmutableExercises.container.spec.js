import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { generateMap } from 'base/shared/ModelHelper';

import { ImmutableExercisesModel, setInitialState } from '../models';
import { ImmutableExercises } from '..';

const mockData = [
  {
    "id": 1,
    "alt": "React Base!",
    "name": "ReactBaseLogo",
    "width": 500,
    "url": "/assets/images/react-base-logo.png"
  }
];

const mockDataImmutable2= generateMap(mockData,ImmutableExercisesModel );

function setup() {

  function dispatch() { }
  let initialState = {
      ImmutableExercises: {
        data: mockData
      }
  };

  let props = {
    dispatch: dispatch,
    ImmutableExercisesModel: setInitialState(initialState)
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<ImmutableExercises {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('containers', () => {
  describe('ImmutableExercises', () => {
   /* it('should render correctly', () => {
      const { output } = setup();
       expect(output.props.name).toBe('ImmutableExercises');

    });*/
  });
});