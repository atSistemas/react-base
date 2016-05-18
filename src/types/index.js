import { typeBuilder } from '../shared/type-helper'

export default typeBuilder([
  'ITEMS_REQUEST','ITEMS_SUCESS','ITEMS_ERROR',
  'ITEM_REQUEST', 'ITEM_SUCESS', 'ITEM_ERROR',
  'SET_VISIBILITY_FILTER',
  'CHANGE_ITEM_STATE',
  'SHOW_ACTIVE', 'SHOW_ALL', 'SHOW_REMOVED'
])
