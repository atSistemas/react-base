import expect from 'expect';
import reducer from '..';
import types from '../../types';

describe('Reducers', () => {
  describe('<%= name %> reducer', () => {

    it('Should return the initial state', () => {

      const action = {
        type: types.<%= nameUpper %>_REQUEST
      };

      expect(reducer([], action)).toEqual([]);
    });

    it('should return the state of <%= name %> request fail', () => {

      const action = {
        type: types.<%= nameUpper %>_ERROR
      };

      expect(reducer([], action)).toEqual([]);
    });
  });
});
