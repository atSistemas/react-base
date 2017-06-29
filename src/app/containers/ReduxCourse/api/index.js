import fetch from 'isomorphic-fetch';

const url = 'http://localhost:8000/mocks/weatherStation.json';

export default {

  fetchData() {
    return fetch(url)
    .then(req => req.json())
    .catch(err => err)
  },
  
}