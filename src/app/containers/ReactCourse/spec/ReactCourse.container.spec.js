import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { generateMap } from 'base/shared/ModelHelper';

import { ReactCourseModel, setInitialState } from '../models';
import { ReactCourse } from '..';

const mockData = [
  {
    "id": 1,
    "alt": "React Base!",
    "name": "ReactBaseLogo",
    "width": 500,
    "url": "/assets/images/react-base-logo.png"
  }
];

const mockDataImmutable2= generateMap(mockData,ReactCourseModel );

function setup() {

  function dispatch() { }
  let initialState = {
      ReactCourse: {
        data: mockData
      }
  };

  let props = {
    dispatch: dispatch,
    ReactCourseModel: setInitialState(initialState)
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<ReactCourse {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('containers', () => {
  describe('ReactCourse', () => {
   /* it('should render correctly', () => {
      const { output } = setup();
       expect(output.props.name).toBe('ReactCourse');

    });*/
  });
});