import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import ReactCourse from '../';

describe('Components', () => {
  describe('ReactCourse component', () => {

    it('Should has properties', () => {

      const component = mount(<ReactCourse  name="ReactCourse"/>);
      expect(component.props().name).to.equal("ReactCourse");

    });
  });
});
