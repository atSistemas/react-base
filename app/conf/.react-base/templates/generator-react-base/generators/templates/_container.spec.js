import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { generateMap } from 'shared/ModelHelper';

import { <%= namePascal %>Model, setInitialState } from '../models';
import { <%= nameGenerator %> } from '..';

const mockData = [
  {
    "id": 1,
    "alt": "React Base!",
    "name": "ReactBaseLogo",
    "width": 500,
    "url": "/assets/images/react-base-logo.png"
  }
];

const mockDataImmutable2= generateMap(mockData,<%= namePascal %>Model );

function setup() {

  function dispatch() { }
  let initialState = {
      <%= nameState %>: {
        data: mockData
      }
  };

  let props = {
    dispatch: dispatch,
    <%= nameState %>: setInitialState(initialState)
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<<%= nameGenerator %> {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('containers', () => {
  describe('<%= nameGenerator %>', () => {
    it('should render correctly', () => {
      const { output } = setup();
      expect(output.type).toBe('div');

      let <%= nameGenerator %>2 = output.props.children.valueSeq().map( <%= nameGenerator %> => {
        let <%= nameGenerator %>Props = <%= nameGenerator %>.props.logo;

        expect (<%= nameGenerator %>Props.get("id")).toEqual(mockData[0].id);
        expect (<%= nameGenerator %>Props.get("alt")).toEqual(mockData[0].alt);
        expect (<%= nameGenerator %>Props.get("name")).toEqual(mockData[0].name);
        expect (<%= nameGenerator %>Props.get("width")).toEqual(mockData[0].width);
        expect (<%= nameGenerator %>Props.get("url")).toEqual(mockData[0].url);
        return <%= nameGenerator %>Props;
      });

      let expected<%= nameGenerator %> = mockDataImmutable2.valueSeq().map( <%= nameGenerator %> => {
        return <%= nameGenerator %>;
      });

      expect(<%= nameGenerator %>2).toEqual(expected<%= nameGenerator %>);
      
    });
  });
});