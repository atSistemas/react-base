import { Record, Map } from 'immutable';
import { generateImmutable } from 'base';

const ReactCourseModel = new Record({
  id: 0,
  alt: '',
  name: '',
  width: 0,
  url: ''
});

const ReactCourseCollection = new Record({ data: new Map() });

function setInitialState(initialState) {
  return initialState.ReactCourse = new ReactCourseCollection({
    data: generateImmutable( initialState.ReactCourse.data, ReactCourseModel )
  });
}

export { ReactCourseModel, ReactCourseCollection, setInitialState };
