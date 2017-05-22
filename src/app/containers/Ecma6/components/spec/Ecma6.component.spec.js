import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Ecma6 from '../';

describe('Components', () => {
  describe('Ecma6 component', () => {

    it('Should has properties', () => {

      const component = mount(<Ecma6  name="Ecma6"/>);
      expect(component.props().name).to.equal("Ecma6");

    });
  });
});
