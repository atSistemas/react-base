import expect from 'expect';
import reducer from '..';
import types from '../../types';

describe('Reducers', () => {
  describe('Logo reducer', () => {

    it('Should return the initial state', () => {

      const action = {
        type: types.LOGO_REQUEST
      };

      expect(reducer([], action)).toEqual([]);
    });

    it('should return the state of Logo request fail', () => {

      const action = {
        type: types.LOGO_ERROR
      };

      expect(reducer([], action)).toEqual([]);
    });
  });
});
