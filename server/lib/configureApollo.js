import ApolloClient from "apollo-client";

import ApolloConfig from "base/conf/graphql";

const config = Object.assign(ApolloConfig, { ssrMode: true });

export default function initApolloClient(req) {
  const client = new ApolloClient(config);
  return client;
}
