import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Calculator from '../';

function setup() {
  let props = {
    
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<Calculator />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('components', () => {
  describe('Calculator component', () => {
    it('should render correctly', () => {
      const { output, renderer } = setup();

      expect(output.type).toBe('div');
    });
  });
});