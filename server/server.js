import express from 'express';
import { match } from 'react-router';
import compression from 'compression';
import { applyMiddleware, createStore } from 'redux';

import statics from './statics';
import ENV from '../src/base/shared/Env';
import applyEnvMiddleWare from './middleware';
import { symbols, color } from '../src/base/shared/console';

const port = 8000;
const app = express();
const context = 'server';
const envMiddleware = applyEnvMiddleWare(ENV, app);
const staticPaths = setStaticsPaths(statics);
const serverStore = applyMiddleware( requestMiddleware )( createStore );

import routes from '../src/base/routes';
import rootReducer from '../src/base/reducers/';
import renderMainPage from './templates/main-page';
import requestMiddleware from '../src/base/middleware/Request';
import fetchRequiredActions from '../src/base/shared/FetchData';
import renderMainContainer from './containers/main-container';

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
