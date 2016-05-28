import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Home from '..';

function setup() {
  let props = {
    
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<Home {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('containers', () => {
  describe('Home', () => {
    it('should render correctly', () => {
      const { output } = setup();

      expect(output.type).toBe('div');

      const [div,linkSection] = output.props.children;
      
      let divType = typeof(div);
      expect(divType).toBe('string');
      expect(linkSection.type.displayName).toEqual('Link');
    });
  });
});