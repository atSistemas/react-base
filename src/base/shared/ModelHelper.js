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

export function generateListWithSummary( data, model ) {
  const arr = data.map((item) => {
    let i = 0;
    let max = 30;
    const words = item.html.split(' ');
    item.summary = '';
    for (i; i <= max ; i++) {
      item.summary += `${words[i]} `;
    }
    item.summary += '...</p>';
    item.html = null;
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
