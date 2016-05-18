import expect from 'expect' 
import * as actions from '../Items' 
import types from '../../types'  
import { generetaFetchTypes } from '../../shared/type-helper'

import itemsAPI from '../../api/items'

describe('actions items', () => { 
  it('should create action fetchItems', () => { 
    
    const props= {
      category: 'news'
    }

    const expectedAction = { 
      types: generetaFetchTypes(types.ITEMS_REQUEST), 
      request: itemsAPI.getItems(props.category) 
    } 
     
    expect(actions.fetchItems(props)).toEqual(expectedAction) 
 
  }) 

  it('should create action fetchItem', () => { 
    
    const id = 1
    const expectedAction = { 
      types: generetaFetchTypes(types.ITEM_REQUEST), 
      request: itemsAPI.getItem(id) 
    } 
     
    expect(actions.fetchItem(id)).toEqual(expectedAction) 
 
  }) 

  it('should create action changeItemState', () => { 
    
    const id = 1
    const expectedAction = { 
      type: [types.CHANGE_ITEM_STATE], 
      id: id
    } 
     
    expect(actions.changeItemState(id)).toEqual(expectedAction) 
 
  }) 
})