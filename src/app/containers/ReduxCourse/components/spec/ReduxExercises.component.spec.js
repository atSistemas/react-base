import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import ReduxExercises from '../';

describe('Components', () => {
  describe('ReduxExercises component', () => {

    it('Should has properties', () => {

      const component = mount(<ReduxExercises  name="ReduxExercises"/>);
      expect(component.props().name).to.equal("ReduxExercises");

    });
  });
});
