import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import ImmutableCourse from '../';

describe('Components', () => {
  describe('ImmutableCourse component', () => {

    it('Should has properties', () => {

      const component = mount(<ImmutableCourse  name="ImmutableCourse"/>);
      expect(component.props().name).to.equal("ImmutableCourse");

    });
  });
});
