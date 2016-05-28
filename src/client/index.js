import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import '../styles';
import routes from '../routes';
import initialState from '../store/initial-state';
import configureStore from '../store/configure-store';

const store = configureStore(browserHistory, initialState);

render(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  document.getElementById('root')
);
