import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-dom/test-utils';

import ForecastDetailItem  from '../';
import ForecastMock from 'mocks/forecast.json';

function setup(props) {

  function dispatch() { }

  let renderer = TestUtils.createRenderer();
  renderer.render(<ForecastDetailItem { ...props }  />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('component ', () => {
  describe('ForecastDetailItem', () => {
    it('should render correctly', () => {

      let props ={
        item: ForecastMock.list[0]
      };       

      const { output } = setup(props);
      expect(output.type).to.equal('div');
    });


  });
});