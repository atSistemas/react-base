import { expect } from 'chai';
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import App from '../';

function setup() {
  let props = {
    children: {}
  };

  let renderer = new ReactShallowRenderer();
  renderer.render(<App { ...props } />);
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
      expect(output.type).to.equal('div');

      const main = output.props.children;
      console.log;
      expect(main.type).to.equal('main');
    });
  });
});
