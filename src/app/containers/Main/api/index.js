import fetch from 'isomorphic-fetch'
import { MainModel } from '../models'

const url = 'http://localhost:8000/mocks/logo.json'

const fetchLogo = () => (
  fetch(url)
    .then(req => req.json())
    .then(data => new MainModel(data))
)

export default {
  fetchLogo
}
