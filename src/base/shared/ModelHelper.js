import { Map, List } from 'immutable';

export function generateMap( data, model ) {
  return data.reduce((acc, item) => {
    return acc.set(item.id, new model(item));
  }, new Map()
  );
}

export function generateList( data, model ) {
  const arr = data.map((item) => {
    return new model(item);
  }
 );
  return new List(arr);
}

export function generateImmutable( data, model ) {
  return Object.keys(data).reduce( (acc, key) => {
    let item = data[key];
    return acc.set( item.id, new model(item) );
  }, new Map()
  );
}
