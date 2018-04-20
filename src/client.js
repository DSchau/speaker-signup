import ApolloClient from 'apollo-boost';

export const CLIENT_OPTIONS = {
  uri: 'https://api.github.com/graphql',
};

export const getClient = token => {
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
