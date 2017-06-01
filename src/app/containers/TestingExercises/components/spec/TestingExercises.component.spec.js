import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import TestingExercises from '../';

describe('Components', () => {
  describe('TestingExercises component', () => {

    it('Should has properties', () => {

      const component = mount(<TestingExercises  name="TestingExercises"/>);
      expect(component.props().name).to.equal("TestingExercises");

    });
  });
});
