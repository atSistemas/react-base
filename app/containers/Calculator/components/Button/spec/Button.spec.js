import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Button from '../';

describe('Calculator / Components', () => {
  describe('<Button />', () => {

    it('Should has properties', () => {

      const component = mount(<Button type="number" value="C" />);
      expect(component.props().type).to.equal("number");
      expect(component.props().value).to.equal("C");

    });


    it('Should has Ink children', () => {

      const component = shallow(<Button type="number" value="C" />);
      expect(component.find('Ink')).to.have.lengthOf(1);

    });

  });
});
