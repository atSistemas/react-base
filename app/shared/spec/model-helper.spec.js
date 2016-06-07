import expect from 'expect';
import { LogoModel } from 'containers/Main/models';
import { generateMap, generateImmutable } from '../model-helper';
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
      const data = generateImmutable( initialState, LogoModel );

      const expectedData = Object.keys(initialState)
                            .reduce( (acc, key) => {
                              let item = initialState[key];
                              return acc.set( item.id, new LogoModel(item) );
                            }, new Map()
                            );

      expect(data).toEqual(expectedData);

    });

    it('should return immutable map', () => {

      const initialState = mockData;
      const data = generateImmutable( initialState, LogoModel );

      const expectedData = Object.keys(initialState)
                            .reduce( (acc, key) => {
                              let item = initialState[key];
                              return acc.set( item.id, new LogoModel(item) );
                            }, new Map()
                            );


      expect(data).toEqual(expectedData);

    });

  });

  describe('generateMap', () => {

    it('should return  object', () => {

      const initialState = generateImmutable( mockData, LogoModel );
      const data = generateMap( initialState, LogoModel );

      const expectedData = initialState
                            .reduce((acc, item) => {
                              return acc.set(item.id, new LogoModel(item));
                            }, new Map()
                            );

      expect(data).toEqual(expectedData);

    });

    it('should return empty object', () => {

      const initialState = generateImmutable( {}, LogoModel );
      const data = generateMap( initialState, LogoModel );

      const expectedData = initialState
                            .reduce((acc, item) => {
                              return acc.set(item.id, new LogoModel(item));
                            }, new Map()
                            );

      expect(data).toEqual(expectedData);

    });

  });

});
