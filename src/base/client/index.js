import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import { ApolloProvider } from 'react-apollo';

import InitialState from 'store/InitialState';
import ConfigureStore from 'store/ConfigureStore';

import { initApollo } from '../shared/ApolloSetup';

import routes from '../routes';

const apolloClient = initApollo();
const store = ConfigureStore(browserHistory, InitialState);

console.log('apolloclient', apolloClient);

hydrate(
  <Provider store={ store }>
    <ApolloProvider client={ apolloClient }>
      <Router history={ browserHistory } routes={ routes } />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);
