import { generateMap } from 'base';
import fetch from 'isomorphic-fetch';
import { TestingExercisesModel } from '../models';

const url = 'http://localhost:8000/mocks/logo.json';

export default {

  fetchTestingExercises() {
    return fetch(url)
    .then(req => req.json())
    .then(data => generateMap(data, TestingExercisesModel));
  }

};
