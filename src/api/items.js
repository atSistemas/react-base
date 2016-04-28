export default {

  getItems(){
    let url = 'http://jsonplaceholder.typicode.com/posts'
    return fetch(url)
    .then(req => req.json())
    .then(data => data)
  }

}
