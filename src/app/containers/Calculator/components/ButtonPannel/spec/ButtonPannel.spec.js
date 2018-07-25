import React from 'react';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import configureStore from 'store/ConfigureStore';
import ButtonPannel from '..';

describe('Calculator / Components', () => {

  describe('<ButtonPannel />', () => {

    it('Should has 19 Button', () => {
      const store = configureStore([]);
      const component = mount(
        <Provider store={ store }>
          <ButtonPannel />
        </Provider>);

      expect(component.find('Button')).to.have.lengthOf(19);
    });

  });
});
