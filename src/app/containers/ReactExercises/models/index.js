import { Record, Map } from 'immutable';
import { generateImmutable } from 'base';

const ReactExercisesModel = new Record({
  id: 0,
  alt: '',
  name: '',
  width: 0,
  url: ''
});

const ReactExercisesCollection = new Record({ data: new Map() });

function setInitialState(initialState) {
  return initialState.ReactExercises = new ReactExercisesCollection({
    data: generateImmutable( initialState.ReactExercises.data, ReactExercisesModel )
  });
}

export { ReactExercisesModel, ReactExercisesCollection, setInitialState };
