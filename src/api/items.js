import fetch from 'isomorphic-fetch'
const url = 'http://localhost:8000/dist/mocks/items.json'

export default {

  getItems( category ){
    return fetch(url + '?category=' + category)
    .then(req => req.json())
    .then(data => data)
  },


  getItem(id){
    return fetch(url + '/' + id)
    .then(req => req.json())
    .then(data => data)
  }


}
