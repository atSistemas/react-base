import { RECEIVE_ITEMS } from '../constants'

const initialState = []

function items(state = initialState, action) {

	switch (action.type) {

		case RECEIVE_ITEMS:

			const items = []
			action.data.map(function (item, id) {
				items.push(
					{
						id: item.id,
						title: item.title
					}
				)
			})

			return Object.assign({}, state, { list: items } )

		default:
			return state
  }
}

export default items
