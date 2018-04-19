import React, { Component } from 'react';

import { AuthenticatedQuery } from '..';

const UserContext = React.createContext('user');

export class UserProvider extends Component {
  state = {
    user: {},
  };

  updateUser = ({ data, error }) => {
    if (!error) {
      this.setState({
        user: data.viewer,
      });
    }
  };

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <AuthenticatedQuery
          query={`{
            viewer {
              avatarUrl
              login
              name
            }
          }`}
          onQuery={this.updateUser}
        />
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const User = UserContext.Consumer;
