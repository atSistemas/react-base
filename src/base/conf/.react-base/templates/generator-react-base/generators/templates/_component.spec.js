import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import <%= name %> from '../';

describe('Components', () => {
  describe('<%= name %> component', () => {

    it('Should has properties', () => {

      const component = mount(<<%= name %>  name="<%= name %>"/>);
      expect(component.props().name).to.equal("<%= name %>");

    });
  });
});
