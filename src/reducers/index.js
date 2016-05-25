import {combineReducers} from 'redux';

import items from './Items';
import filter from './Filters';

export default combineReducers({
  items,
  filter
});
