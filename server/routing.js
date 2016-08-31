import { match } from 'react-router';
import { applyMiddleware, createStore } from 'redux';

import base from '../src/base/';
import routes from '../src/base/routes';
import rootReducer from '../src/base/reducers/';
import renderMainPage from './templates/main-page';
import renderMainContainer from './containers/main-container';
import requestMiddleware from '../src/base/middleware/Request';
import fetchRequiredActions from '../src/base/shared/FetchData';

const context = 'server';
const serverStore = applyMiddleware( requestMiddleware )( createStore );
const store = serverStore(rootReducer);

export default function applyServerRouting(app, callback) {
  app.use(function (req, res) {
    match({ routes , location: req.url }, (error, redirectLocation, renderProps) => {

      if ( error ) return res.status(500).send( error.message );
      if ( redirectLocation ) return res.redirect( 302, redirectLocation.pathname + redirectLocation.search );
      if ( renderProps == null ) return res.status(404).send( 'Not found' );

      fetchRequiredActions(store.dispatch, renderProps.components, renderProps.params, context)
        .then(() => {
          let mainView = renderMainContainer(store, renderProps);
          return renderMainPage(base.env, mainView, store );
        })
        .then( page => res.status(200).send(page) )
        .catch( err => res.end(err.message) );
    });
  });

  base.console.success(`Applied routes`);
}
