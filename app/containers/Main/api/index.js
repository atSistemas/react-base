import fetch from 'isomorphic-fetch';
import { MainModel } from '../models';

import { LogoModel } from '../models';

const url = 'http://localhost:8000/mocks/logo.json';

export default {

  fetchLogo(){
    return fetch(url)
      .then(req => req.json())
      .then(data => new MainModel(data));
  }

};
