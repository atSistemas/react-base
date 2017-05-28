import React from 'react';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

export default function renderContainer(store, renderProps) {

  return renderToString(
    <Provider store={ store }>
      <RouterContext { ...renderProps } />
    </Provider>
 );

}
