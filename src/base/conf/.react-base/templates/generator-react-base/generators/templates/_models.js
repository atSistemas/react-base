import { Record, Map } from 'immutable';

const <%= name %>Model = Record({
  id: -1,
  name: '<%= name %>'
});

const setInitialState = initialState => (
  initialState.<%= name %> = new <%= name %>Model(initialState.<%= name %>)
);

export { <%= name %>Model, setInitialState };
