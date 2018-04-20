import ApolloClient from 'apollo-boost';

import { AUTHENTICATION_KEY } from './components';
import { getItem } from './util';

export const CLIENT_OPTIONS = {
  uri: 'https://api.github.com/graphql',
};

export const getClient = (token = getItem(AUTHENTICATION_KEY)) => {
  return new ApolloClient({
    ...CLIENT_OPTIONS,
    request(operation) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    },
  });
};
