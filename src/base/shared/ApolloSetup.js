import { ApolloClient } from "apollo-client";

import ApolloConfig from "base/conf/graphql";

export const initApollo = () => new ApolloClient(ApolloConfig);
