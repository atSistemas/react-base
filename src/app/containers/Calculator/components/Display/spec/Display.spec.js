import React from 'react';
import { expect } from 'chai';
import { Record } from 'immutable';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';

import Display from '../';
import configureStore from 'store/ConfigureStore';
import { CalculatorModel, setInitialState } from '../../../models';

describe('Calculator / Components', () => {

  describe('<Display />', () => {

    it('Should Display data', () => {

      setInitialState({});
      const fakeStore = {};
      fakeStore.Calculator = new CalculatorModel({ display: 2222 });
      const store = configureStore([], fakeStore);
      const component = mount(
        <Provider store={ store }>
            <Display />
        </Provider>
      );

      expect(component.find('span').text()).to.equal('2222');
    });

  });
});
