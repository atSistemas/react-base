import { Map, List } from 'immutable';

export const generateMap = (data, Model) => (
  data.reduce((acc, item) => (
    acc.set(item.id, new Model(item))
  ), new Map())
);


export const generateList = (data, Model) => (
  new List(data.map(item => new Model(item)))
);

export const generateListWithSummary = (data, Model) => (
  new List(data.map((item) => {
    let i = 0;
    let max = 30;
    const words = item.html.split(' ');
    item.summary = '';
    for (i; i <= max ; i++) {
      item.summary += `${words[i]} `;
    }
    item.summary += '...</p>';
    item.html = null;
    return new Model(item);
  }))
);

export const generateImmutable = (data, Model) => (
  Object.keys(data).reduce((acc, key) => (
    acc.set(data[key].id, new Model(data[key]))
  ), new Map())
);
