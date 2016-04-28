import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import items from './Items'
import filter from './Filters'

export default combineReducers({
  items,
  filter,
  routing: routerReducer
})
