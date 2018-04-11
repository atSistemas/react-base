import { match } from "react-router";
import { getDataFromTree } from "react-apollo";

import { fetchRequiredActions, context } from "base";
import routes from "../../src/base/routes";
import renderPage from "../lib/renderPage";
import { createApp, renderContainerFromTree } from "../lib/renderContainer";
import configureServerStore from "../lib/configureStore";
import initApolloClient from "../lib/configureApollo";

export default function routingMiddleware(req, res) {
  const store = configureServerStore();

  match(
    { routes, location: req.url },
    (error, redirectLocation, renderProps) => {
      if (error) return res.status(500).send(error.message);
      if (redirectLocation)
        return res.redirect(
          302,
          redirectLocation.pathname + redirectLocation.search
        );
      if (renderProps == null) return res.status(404).send("Not found");
      fetchRequiredActions(
        store.dispatch,
        renderProps.components,
        renderProps.params,
        context.context
      )
        .then(() => {
          const client = initApolloClient(req);
          const app = createApp({ store, client, renderProps });
          return getDataFromTree(app).then(() => ({ app, client }));
        })
        .then(({ app, client }) => {
          const renderedContainer = renderContainerFromTree(app);
          const routeMatch = renderProps.location.pathname;
          const page = renderPage(routeMatch, renderedContainer, store, client);
          return res.status(200).send(page);
        })
        .catch(err => res.end(err.message));
    }
  );
}
