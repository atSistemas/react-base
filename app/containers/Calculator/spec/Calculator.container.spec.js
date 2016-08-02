import React from 'react';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';

import Calculator from '../';
import { CalculatorModel } from '../../../models';
import configureStore from 'shared/../store/ConfigureStore';;

describe('Containers', () => {
  describe('Calculator', () => {

    it('Should have display & buttonpannel', () => {
      const store = configureStore([]);
      const component = mount(
        <Provider store={ store }>
            <Calculator />
        </Provider>);

        expect(component.find('Display')).to.have.lengthOf(1);
        expect(component.find('ButtonPannel')).to.have.lengthOf(1);
    });


    it('Should display sum result on clicking buttons', () => {
      const store = configureStore([]);
      const component = mount(
        <Provider store={ store }>
            <Calculator />
        </Provider>);

      component.find('Button')
        .findWhere(n => n.props().value === '1')
        .simulate('click');

        component.find('Button')
          .findWhere(n => n.props().value === '2')
          .simulate('click');

        component.find('Button')
          .findWhere(n => n.props().value === '+')
          .simulate('click');

        component.find('Button')
          .findWhere(n => n.props().value === '3')
          .simulate('click');

        component.find('Button')
          .findWhere(n => n.props().value === '=')
          .simulate('click');

        const Display = component.find('Display');
        expect(Display.text()).to.equal('15');
    });


    it('Should display substract result on clicking buttons', () => {
      const store = configureStore([]);
      const component = mount(
        <Provider store={ store }>
            <Calculator />
        </Provider>);

      component.find('Button')
        .findWhere(n => n.props().value === '4')
        .simulate('click');

      component.find('Button')
        .findWhere(n => n.props().value === '0')
        .simulate('click');

        component.find('Button')
          .findWhere(n => n.props().value === '-')
          .simulate('click');

        component.find('Button')
          .findWhere(n => n.props().value === '5')
          .simulate('click');

        component.find('Button')
          .findWhere(n => n.props().value === '=')
          .simulate('click');

        const Display = component.find('Display');
        expect(Display.text()).to.equal('35');
    });

    it('Should display multiply result on clicking buttons', () => {
      const store = configureStore([]);
      const component = mount(
        <Provider store={ store }>
            <Calculator />
        </Provider>);

      component.find('Button')
        .findWhere(n => n.props().value === '6')
        .simulate('click');

        component.find('Button')
          .findWhere(n => n.props().value === 'x')
          .simulate('click');

        component.find('Button')
          .findWhere(n => n.props().value === '7')
          .simulate('click');

        component.find('Button')
          .findWhere(n => n.props().value === '=')
          .simulate('click');

        const Display = component.find('Display');
        expect(Display.text()).to.equal('42');
    });


    it('Should display divide result on clicking buttons', () => {
      const store = configureStore([]);
      const component = mount(
        <Provider store={ store }>
            <Calculator />
        </Provider>);

      component.find('Button')
        .findWhere(n => n.props().value === '9')
        .simulate('click');

        component.find('Button')
          .findWhere(n => n.props().value === '÷')
          .simulate('click');

        component.find('Button')
          .findWhere(n => n.props().value === '3')
          .simulate('click');

        component.find('Button')
          .findWhere(n => n.props().value === '=')
          .simulate('click');

        const Display = component.find('Display');
        expect(Display.text()).to.equal('3');
    });


    it('Should display a negative number', () => {
      const store = configureStore([]);
      const component = mount(
        <Provider store={ store }>
            <Calculator />
        </Provider>);

      component.find('Button')
        .findWhere(n => n.props().value === '9')
        .simulate('click');


        component.find('Button')
          .findWhere(n => n.props().value === '4')
          .simulate('click');

        component.find('Button')
          .findWhere(n => n.props().value === '+/-')
          .simulate('click');

        const Display = component.find('Display');
        expect(Display.text()).to.equal('-94');
    });



    it('Should reset display', () => {
      const store = configureStore([]);
      const component = mount(
        <Provider store={ store }>
            <Calculator />
        </Provider>);

      component.find('Button')
        .findWhere(n => n.props().value === '1')
        .simulate('click');

        component.find('Button')
          .findWhere(n => n.props().value === 'C')
          .simulate('click');

        const Display = component.find('Display');
        expect(Display.text()).to.equal('0');
    });


  });
});
