import expect from 'expect'
import reducer from '../Items'
import types from '../../types' 

const mockData = [{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":1,"id":3,"title":"ea molestias quasi exercitationem repellat qui ipsa sit aut","body":"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"}]
    

describe('items reducer', () => {

  it('should return the initial state', () => {
    
    const action = {
      type: types.ITEMS_REQUEST
    }

    expect(reducer([], action)).toEqual([]) 
  })

  it('should return the state of items request fail', () => {

    const action = {
      type: types.ITEMS_ERROR
    }

    expect(reducer([], action)).toEqual([]) 
  })

  it('should return the state of items request success', () => {

    const action = {
      type: types.ITEMS_SUCCESS,
      result:mockData
    }

    const expectedState = {
      data: mockData
    }

    expect(reducer([], action)).toEqual(expectedState) 
  })

  it('should change the state removed of item id:1', () => {

    const state = {
      data: mockData
    }

    const action = {
      type: types.CHANGE_ITEM_STATE,
      id: 1
    }

    let afterActionState = reducer(state, action)

    let itemSelected = null

    afterActionState.data.map(function (item) {
      if (item.id === action.id) {
        itemSelected = item
      }

    })


    expect(itemSelected.removed).toEqual(true) 
  })


})