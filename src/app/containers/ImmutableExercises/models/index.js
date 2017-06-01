import { Record, Map } from 'immutable';
import { generateImmutable } from 'base';

const ImmutableExercisesModel = new Record({
  id: 0,
  alt: '',
  name: '',
  width: 0,
  url: ''
});

const ImmutableExercisesCollection = new Record({ data: new Map() });

function setInitialState(initialState) {
  return initialState.ImmutableExercises = new ImmutableExercisesCollection({
    data: generateImmutable( initialState.ImmutableExercises.data, ImmutableExercisesModel )
  });
}

export { ImmutableExercisesModel, ImmutableExercisesCollection, setInitialState };
