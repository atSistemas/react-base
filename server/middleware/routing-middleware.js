import { match } from 'react-router';
import { applyMiddleware, createStore } from 'redux';

import routes from '../../src/base/routes';
import renderPage from '../lib/renderPage';
import rootReducer from '../../src/base/reducers/';
import renderContainer from '../lib/renderContainer';
import requestMiddleware from '../../src/base/middleware/Request';
import fetchRequiredActions from '../../src/base/shared/FetchData';

const context = 'server';
const configureStore = applyMiddleware( requestMiddleware )( createStore );
const store = configureStore(rootReducer);

export default function routingMiddleware(req, res, next) {

  match({ routes , location: req.url }, (error, redirectLocation, renderProps) => {

    if ( error ) return res.status(500).send( error.message );
    if ( redirectLocation ) return res.redirect( 302, redirectLocation.pathname + redirectLocation.search );
    if ( renderProps == null ) return res.status(404).send( 'Not found' );

    fetchRequiredActions(store.dispatch, renderProps.components, renderProps.params, context)
      .then(() => {
        const routeMatch = renderProps.location.pathname;
        const renderedContainer = renderContainer(store, renderProps);
        return renderPage(routeMatch, renderedContainer, store );
      })
      .then( page => res.status(200).send(page) )
      .catch( err => res.end(err.message) );
  });
}
