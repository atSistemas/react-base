import Immutable from 'immutable'

export const itemModel = Immutable.Record({
	userId: null,
	id: "",
	title: 0,
	body: 0,
})

export const itemCollection = Immutable.Record({
	items: Immutable.Map()
})
