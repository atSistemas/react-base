import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Button from '../';

describe('Calculator / Components', () => {
  describe('<Button />', () => {

    it('Should has properties', () => {

      const component = mount(<Button type="number" value="C" onClick={()=>{}} />);
      expect(component.props().type).to.equal("number");
      expect(component.props().value).to.equal("C");

    });

  });
});
