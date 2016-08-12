import { expect } from 'chai';
import { MainModel } from 'containers/Main/models';
import { generateMap, generateImmutable } from '../ModelHelper';
import { Map } from 'immutable';

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
      const data = generateImmutable( initialState, MainModel );

      const expectedData = Object.keys(initialState)
                            .reduce( (acc, key) => {
                              let item = initialState[key];
                              return acc.set( item.id, new MainModel(item) );
                            }, new Map()
                            );

      expect(data).to.equal(expectedData);

    });

    it('should return immutable map', () => {

      const initialState = mockData;
      const data = generateImmutable( initialState, MainModel );

      const expectedData = Object.keys(initialState)
                            .reduce( (acc, key) => {
                              let item = initialState[key];
                              return acc.set( item.id, new MainModel(item) );
                            }, new Map()
                            );


      expect(data).to.deep.equal(expectedData);

    });

  });

  describe('generateMap', () => {

    it('should return  object', () => {

      const initialState = generateImmutable( mockData, MainModel );
      const data = generateMap( initialState, MainModel );

      const expectedData = initialState
                            .reduce((acc, item) => {
                              return acc.set(item.id, new MainModel(item));
                            }, new Map()
                            );

      expect(data).to.deep.equal(expectedData);

    });

    it('should return empty object', () => {

      const initialState = generateImmutable( {}, MainModel );
      const data = generateMap( initialState, MainModel );

      const expectedData = initialState
                            .reduce((acc, item) => {
                              return acc.set(item.id, new MainModel(item));
                            }, new Map()
                            );

      expect(data).to.deep.equal(expectedData);

    });

  });

});
