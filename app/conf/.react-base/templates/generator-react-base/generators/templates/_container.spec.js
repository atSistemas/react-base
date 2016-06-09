import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { generateMap } from 'shared/ModelHelper';

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
    <%= name %>: setInitialState(initialState)
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
    it('should render correctly', () => {
      const { output } = setup();
      expect(output.type).toBe('div');

      let <%= name %>2 = output.props.children.valueSeq().map( <%= name %> => {
        let <%= name %>Props = <%= name %>.props.logo;

        expect (<%= name %>Props.get("id")).toEqual(mockData[0].id);
        expect (<%= name %>Props.get("alt")).toEqual(mockData[0].alt);
        expect (<%= name %>Props.get("name")).toEqual(mockData[0].name);
        expect (<%= name %>Props.get("width")).toEqual(mockData[0].width);
        expect (<%= name %>Props.get("url")).toEqual(mockData[0].url);
        return <%= name %>Props;
      });

      let expected<%= name %> = mockDataImmutable2.valueSeq().map( <%= name %> => {
        return <%= name %>;
      });

      expect(<%= name %>2).toEqual(expected<%= name %>);
      
    });
  });
});