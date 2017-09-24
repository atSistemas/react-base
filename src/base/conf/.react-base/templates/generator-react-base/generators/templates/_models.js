import { Record, Map } from 'immutable';
import { generateImmutable } from 'base';

const <%= name %>Model = Record({
  id: -1,
});

const <%= name %>Collection = Record({ data: Map() });

const setInitialState = initialState => (
  initialState.<%= name %> = new <%= name %>Collection({
    data: generateImmutable(initialState.<%= name %>.data, <%= name %>Model)
  })
);

export { <%= name %>Model, <%= name %>Collection, setInitialState };