import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

export function generateConfig({ initialState = {}, uri, headers, options }) {
  const cache = new InMemoryCache().restore(initialState);

  return {
    cache,
    link: new HttpLink({
      uri,
      credentials: 'same-origin',
      headers
    }),
    ssrForceFetchDelay: 100,
    ...options
  };
}
