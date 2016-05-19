import { typeBuilder } from '../shared/type-helper'

export default typeBuilder([
  'ITEMS_REQUEST','ITEMS_SUCCESS','ITEMS_ERROR',
  'ITEM_REQUEST', 'ITEM_SUCCESS', 'ITEM_ERROR',
  'SET_VISIBILITY_FILTER',
  'CHANGE_ITEM_STATE',
  'SHOW_ACTIVE', 'SHOW_ALL', 'SHOW_REMOVED'
])
