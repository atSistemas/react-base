import expect from 'expect'
import reducer from '../Filters'
import types from '../../types' 

describe('reducers', () => {

  describe('filters reducer', () => {

  /*  it('should return the initial state', () => {

      const initial = types.SHOW_ACTIVE

      expect(reducer(undefined, {})).toEqual(initial)
    })*/


    it('should handle change filter', () => {

      let action = {
          type: types.SET_VISIBILITY_FILTER, 
          filter: types.SHOW_ALL 
        }

      expect(reducer([], action)).toEqual(types.SHOW_ALL)

      let action2 = 
          {
            type: types.SET_VISIBILITY_FILTER, 
            filter: types.SHOW_REMOVED 
          } 

      expect(reducer([types.SHOW_ALL], action2)).toEqual(types.SHOW_REMOVED)
    })

  })

})