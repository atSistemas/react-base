import types from '../types'
import Immutable from 'immutable'
import createReducer from '../shared/create-reducer'

function setVisibilityFilter(state = 'SHOW_ACTIVE', action) {
      return action.filter
}

const handlers = {
  [types.SET_VISIBILITY_FILTER]: setVisibilityFilter
}

export default createReducer(handlers, Immutable.Map());
