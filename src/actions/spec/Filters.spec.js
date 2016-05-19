import expect from 'expect' 
import * as actions from '../Filters' 
import types from '../../types' 

describe('actions', () => {  
  describe('actions filters', () => { 
    it('should create action set visibility filter', () => { 
   
      const text = types.SHOW_ALL
      const expectedAction = { 
        type: types.SET_VISIBILITY_FILTER, 
        filter: text 
      } 
       
      expect(actions.setVisibilityFilter(text).filter).toEqual(expectedAction.filter) 
   
      expect(actions.setVisibilityFilter(text).type).toEqual(expectedAction.type) 
    }) 
  }) 
})