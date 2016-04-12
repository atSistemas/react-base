import { fromJS } from 'immutable'
import { ADD_ITEM, REMOVE_ITEM } from '../constants'

const INITIAL_STATE = fromJS({items: 0});

function basicReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

    case ADD_ITEM:
      return state.update('item', (value) => value + 1);

      case REMOVE_ITEM:
      return state.update('item', (value) => value - 1);

      default:
      return state;
  }
}

export default basicReducer
