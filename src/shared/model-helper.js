import Immutable from 'immutable'

export function generateMap( data, model ){
  return data.reduce( (acc, item) => {
		return acc.set(item.id, new model(item))
		}, Immutable.Map()
	)
}
