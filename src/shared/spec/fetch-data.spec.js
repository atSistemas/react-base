import expect from 'expect'
import fetchRequiredActions from '../fetch-data' 
import * as ItemsActions from '../../actions/Items'
import { itemModel } from '../../models/items'
import { generateImmutable } from '../model-helper'

const mockData = [{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":1,"id":3,"title":"ea molestias quasi exercitationem repellat qui ipsa sit aut","body":"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"}]

describe('shared', () => {

  describe('fetch data', () => {

    it('fetch client action', (done) => {
      let requiredActions = [ItemsActions.fetchItems]

      function dispatch({ types }) {  
        expect(types.length).toEqual(3)
        done()
      }

      const props= {
        params:{
          category: 'news'
        },
        items:{
          data:[]
        },
        dispatch: dispatch
      }

      let context ='client'

      let output = fetchRequiredActions(requiredActions, props, 'items', context)
    })

    it('fetch client action with data', () => {
      let requiredActions = [ItemsActions.fetchItems]

      function dispatch({ types }) {  
        expect(types.length).toEqual(3)
      }
      const data = generateImmutable( mockData, itemModel )

      const props= {
        params:{
          category: 'news'
        },
        items:{
          data: data
        },
        dispatch: dispatch
      }

      let context ='client'

      let output = fetchRequiredActions(requiredActions, props, 'items', context)
    })

   it('fetch server action', (done) => {
      function dispatch({ types }) {
        expect(types.length).toEqual(3)
        done() 
      }

      let requiredActions = [ItemsActions.fetchItems]
      const components =  [[{ 
              displayName: 'Connect(List)',
              WrappedComponent: 
               { 
                 requiredActions: requiredActions, dispatch: dispatch,
                 PropTypes: { dispatch: dispatch, items: { } }},
              dispatch: dispatch,
              requiredActions: requiredActions
            },
            { 
              displayName: 'Home'
            }]]

       let context ='server'

       const params={
        category: 'news'
       }

      let output = fetchRequiredActions(dispatch, components, [], context)
    })

  })

})