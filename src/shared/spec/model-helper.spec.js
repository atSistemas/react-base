import expect from 'expect'
import { itemCollection, itemModel } from '../../models/items'
import { generateMap, generateImmutable } from '../model-helper'
import { Map } from 'immutable'

const mockData = [{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":1,"id":3,"title":"ea molestias quasi exercitationem repellat qui ipsa sit aut","body":"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"}]


describe('shared / model-helper', () => {

  describe('generateImmutable', () => {

    it('should return empty immutable map', () => {

      const initialState = {}
      const data = generateImmutable( initialState, itemModel )

      const expectedData = Object.keys(initialState)
                            .reduce( (acc, key) => {
                              let item = initialState[key];
                              return acc.set( item.id, new itemModel(item) );
                             }, new Map()
                             )

      expect(data).toEqual(expectedData)

    })

    it('should return immutable map', () => {

      const initialState = mockData
      const data = generateImmutable( initialState, itemModel )

      const expectedData = Object.keys(initialState)
                            .reduce( (acc, key) => {
                              let item = initialState[key];
                              return acc.set( item.id, new itemModel(item) );
                             }, new Map()
                             )


      expect(data).toEqual(expectedData)

    })

  })

  describe('generateMap', () => {

    it('should return  object', () => {

      const initialState = generateImmutable( mockData, itemModel )
      const data = generateMap( initialState, itemModel )

      const expectedData = initialState.reduce((acc, item) => {
                            return acc.set(item.id, new itemModel(item))
                            }, new Map()
                          )

      expect(data).toEqual(expectedData)

    })

    it('should return empty object', () => {

      const initialState = generateImmutable( {}, itemModel )
      const data = generateMap( initialState, itemModel )

      const expectedData = initialState.reduce((acc, item) => {
                              return acc.set(item.id, new itemModel(item))
                              }, new Map()
                            )

      expect(data).toEqual(expectedData)

    })

  })

})
