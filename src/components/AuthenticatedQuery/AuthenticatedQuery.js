import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import { Authentication } from '..';

export class AuthenticatedQuery extends Component {
  state = {
    data: {},
    loading: false,
    requested: false,
  };

  makeRequest = async client => {
    const result = await client.query({
      query: gql(this.props.query),
      variables: this.props.variables,
    });

    this.setState({
      ...result,
      requested: true,
    });
  };

  render() {
    const { children, query, variables } = this.props;
    const { requested, ...stateData } = this.state;
    return (
      <Authentication>
        {({ token }) => (
          <ApolloConsumer>
            {client => {
              if (token && !requested) {
                this.makeRequest(client);
              }
              return children(stateData);
            }}
          </ApolloConsumer>
        )}
      </Authentication>
    );
  }
}
