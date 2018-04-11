import config from "base/conf/site";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const initialState =
  typeof window !== "undefined" ? window.__APOLLO_STATE__ : {};

export default {
  initialState,
  cache: new InMemoryCache().restore(initialState),
  link: new HttpLink({
    uri: config.graphql.endpoint,
    credentials: "same-origin",
    headers: {
      Authorization: `Bearer ${config.graphql.authToken}`
    }
  }),
  ssrForceFetchDelay: 100
};
