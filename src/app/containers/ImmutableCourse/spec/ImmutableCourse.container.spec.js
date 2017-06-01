import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { generateMap } from 'base/shared/ModelHelper';

import { ImmutableCourseModel, setInitialState } from '../models';
import { ImmutableCourse } from '..';

const mockData = [
  {
    "id": 1,
    "alt": "React Base!",
    "name": "ReactBaseLogo",
    "width": 500,
    "url": "/assets/images/react-base-logo.png"
  }
];

const mockDataImmutable2= generateMap(mockData,ImmutableCourseModel );

function setup() {

  function dispatch() { }
  let initialState = {
      ImmutableCourse: {
        data: mockData
      }
  };

  let props = {
    dispatch: dispatch,
    ImmutableCourseModel: setInitialState(initialState)
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<ImmutableCourse {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('containers', () => {
  describe('ImmutableCourse', () => {
   /* it('should render correctly', () => {
      const { output } = setup();
       expect(output.props.name).toBe('ImmutableCourse');

    });*/
  });
});