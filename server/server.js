import express from 'express';
import { match } from 'react-router';
import { applyMiddleware, createStore } from 'redux';

import base from '../src/base/';
import routes from '../src/base/routes';
import configureServer from './configure';
import rootReducer from '../src/base/reducers/';
import renderMainPage from './templates/main-page';
import renderMainContainer from './containers/main-container';
import requestMiddleware from '../src/base/middleware/Request';
import fetchRequiredActions from '../src/base/shared/FetchData';

const port = 8000;
const app = express();
const context = 'server';
const serverStore = applyMiddleware( requestMiddleware )( createStore );

configureServer(app);

app.use(function (req, res) {

  const store = serverStore(rootReducer);

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

app.listen(port, function (err) {
  if (err) {
    base.console.error(`${err}`);
    return;
  }
  base.console.success(`Server up on http://localhost:${port}`);
});
