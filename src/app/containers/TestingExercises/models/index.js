import { Record, Map } from 'immutable';
import { generateImmutable } from 'base';

const TestingExercisesModel = new Record({
  id: 0,
  alt: '',
  name: '',
  width: 0,
  url: ''
});

const TestingExercisesCollection = new Record({ data: new Map() });

function setInitialState(initialState) {
  return initialState.TestingExercises = new TestingExercisesCollection({
    data: generateImmutable( initialState.TestingExercises.data, TestingExercisesModel )
  });
}

export { TestingExercisesModel, TestingExercisesCollection, setInitialState };
