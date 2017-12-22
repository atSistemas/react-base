import { expect } from 'chai';
import { Map, List, Record } from 'immutable';

import { MainModel } from 'containers/Main/models';
import * as ModelHelper from '../ModelHelper';

const mockData = [
  {
    "id": 1,
    "alt": "React Base!",
    "name": "ReactBaseLogo",
    "width": 500,
    "url": "/assets/images/react-base-logo.png"
  }
];


describe('shared / model-helper', () => {

  describe('generateImmutable', () => {

    it('should return empty immutable map', () => {

      const initialState = {};
      const data = ModelHelper.generateImmutable(initialState, MainModel);

      const expectedData = Object.keys(initialState)
        .reduce((acc, key) => {
          let item = initialState[key];
          return acc.set(item.id, new MainModel(item));
        }, new Map()
        );

      expect(data).to.equal(expectedData);

    });

    it('should return immutable map', () => {

      const initialState = mockData;
      const data = ModelHelper.generateImmutable(initialState, MainModel);

      const expectedData = Object.keys(initialState)
        .reduce((acc, key) => {
          let item = initialState[key];
          return acc.set(item.id, new MainModel(item));
        }, new Map()
        );


      expect(data).to.deep.equal(expectedData);

    });

  });

  describe('generateMap', () => {

    it('should return  object', () => {

      const initialState = ModelHelper.generateImmutable(mockData, MainModel);
      const data = ModelHelper.generateMap(initialState, MainModel);

      const expectedData = initialState
        .reduce((acc, item) => {
          return acc.set(item.id, new MainModel(item));
        }, new Map()
        );

      expect(data).to.deep.equal(expectedData);

    });

    it('should return empty object', () => {

      const initialState = ModelHelper.generateImmutable({}, MainModel);
      const data = ModelHelper.generateMap(initialState, MainModel);

      const expectedData = initialState
        .reduce((acc, item) => {
          return acc.set(item.id, new MainModel(item));
        }, new Map()
        );

      expect(data).to.deep.equal(expectedData);

    });

  });

  describe('generateList', () => {

    it('should return object', () => {

      const initialState = [mockData];
      const data = ModelHelper.generateList(initialState, MainModel);

      const expectedData = new List(
        initialState.map(item => new MainModel(item))
      );
      expect(data).to.deep.equal(expectedData);

    });

  });
});
