import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import  { App } from '../';

function setup() {
  let props = {
    children: {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<App {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('comtainers', () => {
  describe('App comtainer', () => {
    it('should render correctly', () => {
      const { output } = setup();

      expect(output.type).toBe('div');

      const [ main ] = output.props.children;

      //expect(header.type.displayName).toEqual('Header');

      //expect(main.type).toBe('main');
    });
  });
});
