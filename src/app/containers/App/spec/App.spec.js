import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
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
    
      expect(output.type).to.equal('div');

      const main  = output.props.children;

      expect(main.type).to.equal('main');
    });
  });
});
