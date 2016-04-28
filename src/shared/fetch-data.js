import fetch from 'isomorphic-fetch'
import { FETCH_DATA } from '../constants'
import createAction from '../shared/action-creator'

export function fetchServerData(dispatch, components, params) {

  const actions = components.reduce( (prev, current) => {
  	return Object.keys(current).reduce( (acc, key) => {
  		return current[key].hasOwnProperty('requiredActions') ? current[key].requiredActions.concat(acc) : acc
  	}, prev)

  }, [])

  const promises = actions.map(need => dispatch(need(params)));
  return Promise.all(promises)
}

export function fetchRequiredActions( actions, props ){
	const { params, dispatch } = props;
	actions.map( action => dispatch(action(params)) )
}
