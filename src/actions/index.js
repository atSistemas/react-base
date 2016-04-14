import { ADD_ITEM, REMOVE_ITEM, SET_VISIBILITY_FILTER } from '../constants/action-types';
import { createAction } from '../shared/action-creator'

  export function addItem(text) {
    return {
      type: ADD_ITEM,
      items,
      text: 'Item added!'
    }
  }

  export function removeItem(id) {
    return {
      type: REMOVE_ITEM,
      items,
      text: 'Item removed!'
    }
  }


  export function visibilityFilter() {
    return {
      type: SET_VISIBILITY_FILTER,
      filter: 'SHOW_COMPLETED'
    }
  }
