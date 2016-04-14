import { fromJS } from 'immutable'
import * as actions from '../actions'

const INITIAL_STATE = fromJS({text: 'Use Redux', completed: false, id: 0});

function update(state = INITIAL_STATE, action) {
  switch (action.type) {

    case actions.ADD_ITEM:
      return [
        {
          id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]

    case actions.EDIT_ITEM:
      return state.map(item =>
        item.id === action.id ?
          Object.assign({}, item, { text: action.text }) :
          item
      )


    case actions.REMOVE_ITEM:
      return state.filter(item =>
          item.id !== action.id
      )

    default:
      return state;
  }
}

export default update
