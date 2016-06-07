import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from '../routes';
import InitialState from 'store/InitialState';
import ConfigureStore from 'store/ConfigureStore';

const store = ConfigureStore(browserHistory, InitialState);

render(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  document.getElementById('root')
);
