import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { generateMap } from 'base/shared/ModelHelper';

import { <%= name %>Model, setInitialState } from '../models';
import { <%= name %> } from '..';

const mockData = [
  {
    "id": 1,
    "alt": "React Base!",
    "name": "ReactBaseLogo",
    "width": 500,
    "url": "/assets/images/react-base-logo.png"
  }
];

const mockDataImmutable2= generateMap(mockData,<%= name %>Model );

function setup() {

  function dispatch() { }
  let initialState = {
      <%= name %>: {
        data: mockData
      }
  };

  let props = {
    dispatch: dispatch,
    <%= name %>Model: setInitialState(initialState)
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<<%= name %> {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('containers', () => {
  describe('<%= name %>', () => {
   /* it('should render correctly', () => {
      const { output } = setup();
       expect(output.props.name).toBe('<%= name %>');

    });*/
  });
});