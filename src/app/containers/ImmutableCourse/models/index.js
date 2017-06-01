import { Record, Map } from 'immutable';
import { generateImmutable } from 'base';

const ImmutableCourseModel = new Record({
  id: 0,
  alt: '',
  name: '',
  width: 0,
  url: ''
});

const ImmutableCourseCollection = new Record({ data: new Map() });

function setInitialState(initialState) {
  return initialState.ImmutableCourse = new ImmutableCourseCollection({
    data: generateImmutable( initialState.ImmutableCourse.data, ImmutableCourseModel )
  });
}

export { ImmutableCourseModel, ImmutableCourseCollection, setInitialState };
