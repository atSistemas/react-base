import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { RouterContext } from 'react-router';

export default function renderMainView(store, renderProps){
  return renderToString(
    <Provider store={ store }>
      <RouterContext { ...renderProps } />
    </Provider>
 );
}
