import React from "react";
import { Provider } from "react-redux";
import { RouterContext } from "react-router";
import { renderToString } from "react-dom/server";
import { ApolloProvider } from "react-apollo";

export const createApp = (
  { store, client, renderProps } // eslint-disable-line
) => (
  <Provider store={ store }>
    <ApolloProvider client={ client }>
      <RouterContext { ...renderProps } />
    </ApolloProvider>
  </Provider>
);

export const renderContainerFromTree = app => renderToString(app);

export default (store, client, renderProps) =>
  renderToString(
    <Provider store={ store }>
      <ApolloProvider client={ client }>
        <RouterContext { ...renderProps } />
      </ApolloProvider>
    </Provider>
  );
