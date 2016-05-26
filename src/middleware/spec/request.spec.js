import expect from 'expect';
import requestMiddleware from '../request';
import types from '../../types'; 
import itemsAPI from '../../api/items';
import { generetaFetchTypes } from '../../shared/type-helper';

const mockData = [{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":1,"id":3,"title":"ea molestias quasi exercitationem repellat qui ipsa sit aut","body":"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"}]
  
const createFakeStore = fakeData => ({
  getState() {
    return fakeData;
  }
});

const dispatchWithStoreOf = (storeData, action) => {
  let dispatched = null;
  const dispatch = requestMiddleware(createFakeStore(storeData))(actionAttempt => dispatched = actionAttempt);
  dispatch(action);
  return dispatched;
}

describe('middleware', () => {

  describe('request', () => {

    it('requestMiddleware', () => {

      const props= {
        category: 'news'
      };
      
      const actions = { 
        types: generetaFetchTypes(types.ITEMS_REQUEST), 
        request: itemsAPI.getItems(props.category) 
      }; 


      const expectedAction = {
        type: 'ITEMS_REQUEST'
      }

      expect(dispatchWithStoreOf({}, actions)).toEqual(expectedAction);
    });


    it('requestMiddleware', () => {
      
      const actions = { 
        types: generetaFetchTypes(types.ITEMS_REQUEST)
      }; 

      expect(dispatchWithStoreOf({}, actions)).toEqual(actions);
    });


  });

});