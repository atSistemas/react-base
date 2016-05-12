import types from '../types'
import createReducer from '../shared/create-reducer';

const initialState = []

function itemsRequest( state ){ return state }

function itemsError( state ){ return state }

function itemsSucess(state, action) {
  return { ...state, data: action.result }
}

function changeItemState(state, action){
  let items = []
  state.data.map(function (item) {
    if (item.id === action.id) {
      item.removed = !item.removed
    }
    items.push(item)
  })

  return { ...state, data: items }
}



const handlers = {
  [types.ITEMS_REQUEST]: itemsRequest,
  [types.ITEMS_SUCESS]: itemsSucess,
  [types.ITEMS_ERROR]: itemsError,
  [types.CHANGE_ITEM_STATE]: changeItemState
}

export default createReducer( initialState, handlers );
