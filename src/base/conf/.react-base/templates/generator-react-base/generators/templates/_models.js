import { Record, Map } from 'immutable';

const <%= name %>Model = Record({
  id: -1,
  name: '<%= name %>'
});

const <%= name %>Collection = Record({ data: Map() });

const setInitialState = initialState => (
  initialState.<%= name %> = new <%= name %>Model()
);

export { <%= name %>Model, <%= name %>Collection, setInitialState };