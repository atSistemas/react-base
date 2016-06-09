import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import <%= namePascal %> from '../';

function setup() {
  let props = {
    
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<<%= namePascal %> />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('components', () => {
  describe('<%= name %> component', () => {
    it('should render correctly', () => {
      const { output, renderer } = setup();

      expect(output.type).toBe('div');
    });
  });
});