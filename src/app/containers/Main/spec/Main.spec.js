import React from 'react';
import { spy } from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import Main from '../';
import { MainModel, setInitialState } from '../models';
import configureStore from 'store/ConfigureStore';

describe('Container', () => {

  describe('<Main />', () => {

    it('Should init Correctly', () => {

      spy(Main.prototype, 'componentDidMount');

      const store = configureStore([]);
      const component = mount(
        <Provider store={ store }>
            <Main />
        </Provider>
      );

      expect(Main.prototype.componentDidMount.calledOnce).to.equal(true);

    });

    it('Should have Logo & LinkButton', () => {

      setInitialState({});
      const fakeStore = {};
      fakeStore.Main = new MainModel({ id: 2222, src:'fakePath', alt:'aaaalt!', width:500 });
      const store = configureStore([], fakeStore);
      const component = mount(
        <Provider store={ store }>
            <Main />
        </Provider>
      );

      expect(component.find('LinkButton')).to.have.lengthOf(2);
      //TODO Improve ajax testing
      setTimeout(() => {
        expect(component.find('Logo')).to.have.lengthOf(1);
        done();
      }, 1000)
    });

  });
});
