import { Record, Map } from 'immutable';

const ReduxCourse = Record({
  counter: 0,
  sum: 0,
  anotherProp: Map({
    id:22,
    name: 'John',
    other: Map({
      eo: true
    })
  }),
});

const ReduxExercisesCollection = new Record({ data: new Map() });

function setInitialState(initialState) {
  return initialState.ReduxCourse = new ReduxCourse();
}

export { ReduxCourse, ReduxExercisesCollection, setInitialState };
