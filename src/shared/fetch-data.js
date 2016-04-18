import fetch from 'isomorphic-fetch'
import { FETCH_DATA } from '../constants'
import createAction from '../shared/action-creator'

const fetchingData = createAction(FETCH_DATA)

function fetchData(url, callback) {
  return dispatch => {
    dispatch(fetchingData())
    return fetch(url )
      .then(req => req.json())
      .then(data => dispatch(callback(data)))
  }
}

export default fetchData
