
import { Record, Map } from 'immutable';

export const itemModel = new Record({
  id: 0,
  userId: 0,
  title: '',
  body: ''
});

export const itemCollection = new Record({ data: new Map() });