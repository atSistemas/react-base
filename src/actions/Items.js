import fetch from 'isomorphic-fetch'
import * as constants from '../constants'

function fetchItems() {
  return {
    type: constants.FETCH_ITEMS
  }
}

function receiveItems(json) {
  return {
    type: constants.RECEIVE_ITEMS,
    data: json,
    timeStamp: Date.now()
  }
}

function requestItems(url) {
  return dispatch => {
    dispatch(fetchItems())
    return fetch(url + name )
      .then(req => req.json())
      .then(json => dispatch(receiveItems(json)))
  }
}

export default requestItems
