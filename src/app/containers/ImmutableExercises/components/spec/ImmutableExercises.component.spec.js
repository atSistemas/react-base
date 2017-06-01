import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import ImmutableExercises from '../';

describe('Components', () => {
  describe('ImmutableExercises component', () => {

    it('Should has properties', () => {

      const component = mount(<ImmutableExercises  name="ImmutableExercises"/>);
      expect(component.props().name).to.equal("ImmutableExercises");

    });
  });
});
