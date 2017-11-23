import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import InitialState from 'store/InitialState';
import ConfigureStore from 'store/ConfigureStore';
import routes from '../routes';

const store = ConfigureStore(browserHistory, InitialState);

hydrate(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  document.getElementById('root')
);
