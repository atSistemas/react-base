import { fromJS } from 'immutable'
import { ADD_ITEM, REMOVE_ITEM } from '../actions'

const INITIAL_STATE = fromJS({items: 0});

function itemHandler(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

    case ADD_ITEM:
      return Object.assign({}, state, {
        items: state.items +1,
        text: action.text
      })

    case REMOVE_ITEM:
      return Object.assign({}, state, {
        items: state.items -1,
        text: action.text
      })

    default:
      return state;
  }
}

export default itemHandler
