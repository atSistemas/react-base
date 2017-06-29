import React from 'react';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import ReduxCourse from '../';
import configureStore from 'store/ConfigureStore';

describe('Containers', () => {
  describe('<ReduxCourse />', () => {

    it('Should increment the value clicking on increment', () => {
      const store = configureStore([]);
      const component = mount(
        <Provider store={ store }>
            <ReduxCourse />
        </Provider>);

      component.find('#increment')
       .simulate('click');

      const counterValue = component.find('#counterValue');
        
      expect(counterValue.text()).to.be.equal(2); 
    });
  });
});