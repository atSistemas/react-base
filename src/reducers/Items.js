import { ITEMS_REQUEST, ITEMS_SUCESS, ITEMS_ERROR } from '../constants'
import createReducer from '../shared/create-reducer';
const initialState = []

function itemsRequest( state, action ){ return state }

function itemsError( state, action ){ return state }

function itemsSucess(state, action) {
	return { ...state, data: action.result }
}

	/*
	switch (action.type) {

		case ITEMS_SUCESS:
		return { ...state, data: action.data }

		case CHANGE_ITEM_STATE:
			state.data.map(function (item, id) {
				if (item.id === action.id) {
			    item.removed = !item.removed
					}
					items.push(item)
				})

		return { ...state, data: items }

			default:
				return state
	  }
}*/


const handlers ={
	[ITEMS_REQUEST]: itemsRequest,
	[ITEMS_SUCESS]: itemsSucess,
	[ITEMS_ERROR]: itemsError,
}

export default createReducer( initialState, handlers );
