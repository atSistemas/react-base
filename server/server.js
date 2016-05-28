import express from 'express';
import { match } from 'react-router';
import { applyMiddleware, createStore } from 'redux';

import statics from './statics';
import routes from '../src/routes';
import ENV from '../src/shared/env';
import rootReducer from '../src/reducers/';
import applyEnvMiddleWare from './middleware';
import {symbols, color} from './shared/console';
import renderMainPage from './templates/main-page';
import requestMiddleware from '../src/middleware/request';
import fetchRequiredActions from '../src/shared/fetch-data';
import renderMainContainer from './containers/main-container';

const port = 8000;
const app = express();
const context = 'server';
const staticPaths = setStaticsPaths(statics);
const envMiddleware = applyEnvMiddleWare(ENV, app);
const serverStore = applyMiddleware( requestMiddleware )( createStore );

app.use(function (req, res) {

  const store = serverStore(rootReducer);

  match({ routes , location: req.url }, (error, redirectLocation, renderProps) => {

    if ( error ) return res.status(500).send( error.message );
    if ( redirectLocation ) return res.redirect( 302, redirectLocation.pathname + redirectLocation.search );
    if ( renderProps == null ) return res.status(404).send( 'Not found' );

    fetchRequiredActions(store.dispatch, renderProps.components, renderProps.params, context)
      .then(() => {
        let mainView = renderMainContainer(store, renderProps);
        return renderMainPage( ENV, mainView, store );
      })
      .then( page => res.status(200).send(page) )
      .catch( err => res.end(err.message) );
  });
});

function setStaticsPaths(staticPaths){
  staticPaths.map(function(staticPath){
    app.use(staticPath.route, express.static(staticPath.dir));
    console.log('[BASE] ' + color('success', symbols.ok) + ' Applied static path ' + staticPath.route);
  });
}

app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('[BASE] ' + color('success', symbols.ok) + ' Server up on http://localhost:' +  port);

});
