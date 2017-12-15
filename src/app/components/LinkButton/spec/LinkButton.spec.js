import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import LinkButton from '../';

describe('Components / LinkButton', () => {
  describe('<LinkButton />', () => {

    it('Should has properties', () => {

      const component = mount(<LinkButton location="/calculator" value="Simple calculator" />);
      expect(component.props().location).to.equal("/calculator");
      expect(component.props().value).to.equal("Simple calculator");

    });

  });
});
