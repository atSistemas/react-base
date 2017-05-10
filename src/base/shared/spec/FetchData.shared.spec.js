import { expect } from 'chai';
import { fetchRequiredActions } from '../FetchData' ;
import action from 'containers/Main/actions';
import { MainModel } from 'containers/Main/models';
import { generateImmutable } from '../ModelHelper';

const mockData = [{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":1,"id":3,"title":"ea molestias quasi exercitationem repellat qui ipsa sit aut","body":"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"}];

describe('shared', () => {

  describe('fetch data', () => {

    it('fetch client action', (done) => {
      let requiredActions = [action.getLogo];

      function dispatch({ types }) {
        expect(types.length).to.equal(3);
        done();
      }

      const props= {
        params:{
          category: 'news'
        },
        logo:{
          data:[]
        },
        dispatch: dispatch
      };

      let context ='client';

      fetchRequiredActions(requiredActions, props, 'MainModel', context);
    });

    it('fetch client action with data', () => {
      let requiredActions = [action.getLogo];

      function dispatch({ types }) {
        expect(types.length).to.equal(3);
      }
      const data = generateImmutable( mockData, MainModel );

      const props= {
        params:{
          category: 'news'
        },
        logo:{
          data: data
        },
        dispatch: dispatch
      };

      let context ='client';

      fetchRequiredActions(requiredActions, props, 'MainModel', context);
    });

    it('fetch server action', (done) => {
      function dispatch({ types }) {
        expect(types.length).to.equal(3);
        done() ;
      }

      let requiredActions = [action.getLogo];
      const components =  [[
        { displayName: 'Connect(Main)',
          WrappedComponent: {
            requiredActions: requiredActions, dispatch: dispatch,
            PropTypes: { dispatch: dispatch, logo: { } }
          },
          dispatch: dispatch,
          requiredActions: requiredActions
        },
        {
          displayName: 'Main'
        }
      ]];

      let context ='server';

      fetchRequiredActions(dispatch, components, [], context);
    });

  });

});
