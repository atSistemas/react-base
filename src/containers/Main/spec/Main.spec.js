import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { generateMap } from '../../../shared/model-helper';

import { LogoModel, setInitialState } from '../../../models/Logo';
import { Main } from '..';

const mockData = [
  {
    "id": 1,
    "alt": "React Base!",
    "name": "ReactBaseLogo",
    "width": 500,
    "url": "/assets/images/react-base-logo.png"
  }
];

const mockDataImmutable2= generateMap(mockData,LogoModel );

function setup() {

  function dispatch() { }
  let initialState = {
    logo :{
      data: mockData
    }
  };

  let props = {
    dispatch: dispatch,
    logo: setInitialState(initialState)
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<Main {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('containers', () => {
  describe('Main', () => {
    it('should render correctly', () => {
      const { output } = setup();

      expect(output.type).toBe('div');

      let logo2 = output.props.children.valueSeq().map( logo => {
        let logoProps = logo.props.logo;

        expect (logoProps.get("id")).toEqual(mockData[0].id);
        expect (logoProps.get("alt")).toEqual(mockData[0].alt);
        expect (logoProps.get("name")).toEqual(mockData[0].name);
        expect (logoProps.get("width")).toEqual(mockData[0].width);
        expect (logoProps.get("url")).toEqual(mockData[0].url);
        return logoProps;
      });

      let expectedLogo = mockDataImmutable2.valueSeq().map( logo => {
        return logo;
      });

      expect(logo2).toEqual(expectedLogo);
      
    });
  });
});