import expect from 'expect';
import  configureStore  from '../configure-store';

describe('store / configureStore', () => {

  describe('configureStore', () => {

    it('should return configureStore', () => {

      let output = configureStore(null,{});

      let type = typeof(output.dispatch);

      expect(type).toBe('function');

    });
  });


});
