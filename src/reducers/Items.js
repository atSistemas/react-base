import * as constants from '../constants'

const initialState = []

function update(state = initialState, action) {

	switch (action.type) {

		case constants.RECEIVE_ITEMS:

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

module.exports = update;
