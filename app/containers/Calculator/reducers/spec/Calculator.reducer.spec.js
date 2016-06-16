import expect from 'expect';
import reducer from '..';
import types from '../../types';

describe('Reducers', () => {
  describe('Calculator reducer', () => {

    it('Should return the initial state', () => {

      const action = {
        type: types.CALCULATOR_REQUEST
      };

      expect(reducer([], action)).toEqual([]);
    });

    it('should return the state of Calculator request fail', () => {

      const action = {
        type: types.CALCULATOR_ERROR
      };

      expect(reducer([], action)).toEqual([]);
    });
  });
});
