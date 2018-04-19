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
      variables: this.props.variables || {},
    });

    this.setState(
      {
        ...result,
        requested: true,
      },
      () => {
        if (this.props.onQuery) {
          this.props.onQuery(result);
        }
      }
    );
  };

  render() {
    const { children, query } = this.props;
    const { requested, ...stateData } = this.state;
    return (
      <Authentication>
        {({ token }) => (
          <ApolloConsumer>
            {client => {
              if (token && !requested) {
                this.makeRequest(client);
              }
              return typeof children === 'function'
                ? children(stateData)
                : null;
            }}
          </ApolloConsumer>
        )}
      </Authentication>
    );
  }
}
