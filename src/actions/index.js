import * as types from '../constants/action-types';
import { createAction } from '../shared/action-creator'

  export function addItem(text) {
    return {type: types.ADD_ITEM, text}
  }

  export function removeItem(id) {
    return {type: types.REMOVE_ITEM, id}
  }
