import React from 'react';
import { Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import { Authentication, AuthenticationProvider } from './src/components';
import { getClient } from './src/client';

exports.replaceRouterComponent = function({ history }) {
  const App = ({ children }) => (
    <AuthenticationProvider>
      <Authentication>
        {({ token }) => {
          return (
            <ApolloProvider client={getClient(token)}>
              <Router history={history}>{children}</Router>
            </ApolloProvider>
          );
        }}
      </Authentication>
    </AuthenticationProvider>
  );

  return App;
};
