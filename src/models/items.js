import { Record, Map } from 'immutable';

export const itemModel = new Record({
	id: 0,
	userId: 0,
	title: '',
	body: ''
});

  constructor() {
    this.userId = 0;
    this.id = 0;
    this.title = null;
    this.body = null;
  }

}

export const itemModel = new Record( new Item() );
export const itemCollection = new Record({ data: new Map() });
