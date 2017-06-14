import { Record, Map, List } from 'immutable';
import { generateImmutable } from 'base';

const ImmutableRecord = Record({
  id: -1,
  age: 22,
  name: 'Tony Randall',
  birthDate: '22-10-1980',
});

const ImmutableCourseCollection = new Record({ data: new Map() });

function setInitialState(initialState) {
  return initialState.ImmutableCourse = new ImmutableCourseCollection({
    data: generateImmutable( initialState.ImmutableCourse.data, ImmutableRecord )
  });
}

export { ImmutableRecord, ImmutableCourseCollection, setInitialState };
