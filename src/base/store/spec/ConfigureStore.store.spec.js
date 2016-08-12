import { expect } from 'chai';
import  configureStore  from '../ConfigureStore';

describe('store / configureStore', () => {

  describe('configureStore', () => {

    it('should return configureStore', () => {

      let output = configureStore(null,{});

      let type = typeof(output.dispatch);

      expect(type).to.equal('function');

    });
  });


});
