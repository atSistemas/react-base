import { Map, List } from 'immutable';

export const generateMap = (data, Model) => (
  data.reduce((acc, item) => (
    acc.set(item.id, new Model(item))
  ), new Map())
);

export const generateList = (data, Model) => (
  new List(data.map(item => new Model(item)))
);

export const generateImmutable = (data, Model) => (
  Object.keys(data).reduce((acc, key) => (
    acc.set(data[key].id, new Model(data[key]))
  ), new Map())
);
