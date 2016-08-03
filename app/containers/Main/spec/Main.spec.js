import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { generateMap } from 'shared/ModelHelper';

import { LogoModel, setInitialState } from '../models';
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
      Main: {
        data: mockData
      }
  };

  let props = {
    dispatch: dispatch,
    MainModel: setInitialState(initialState)
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
      expect(output.type).to.equal('div');

      let logo2 = output.props.children.valueSeq().map( logo => {
        let logoProps = logo.props.logo;

        expect (logoProps.get("id")).to.equal(mockData[0].id);
        expect (logoProps.get("alt")).to.equal(mockData[0].alt);
        expect (logoProps.get("name")).to.equal(mockData[0].name);
        expect (logoProps.get("width")).to.equal(mockData[0].width);
        expect (logoProps.get("url")).to.equal(mockData[0].url);
        return logoProps;
      });

      let expectedLogo = mockDataImmutable2.valueSeq().map( logo => {
        return logo;
      });

      expect(logo2.size).to.equal(expectedLogo.size);
      
    });
  });
});