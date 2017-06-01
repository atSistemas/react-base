import { generateMap } from 'base';
import fetch from 'isomorphic-fetch';
import { ImmutableCourseModel } from '../models';

const url = 'http://localhost:8000/mocks/logo.json';

export default {

  fetchImmutableCourse() {
    return fetch(url)
    .then(req => req.json())
    .then(data => generateMap(data, ImmutableCourseModel));
  }

};
