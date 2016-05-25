import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Header from '..';

function setup() {
  let props = {
    
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<Header {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('components', () => {
  describe('Header', () => {
    it('should render correctly', () => {
      const { output } = setup();

      expect(output.type).toBe('header');

      const linkSection  = output.props.children;

      expect(linkSection.type.displayName).toEqual('Link');
    });
  });
});