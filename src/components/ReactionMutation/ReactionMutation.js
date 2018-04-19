import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { Authentication } from '..';

export function ReactionMutation({
  children,
  message,
  subjectId,
  type = 'add',
}) {
  return (
    <Authentication>
      {({ authenticate, authenticated }) => (
        <Mutation
          mutation={gql`
            mutation ${type.slice(0, 1).toUpperCase() +
              type.slice(1)}ReactionToIssue(
              $subjectId: ID!
              $content: ReactionContent!
            ) {
              ${type}Reaction(input: { subjectId: $subjectId, content: $content }) {
                reaction {
                  content
                }
                subject {
                  id
                }
              }
            }
          `}
        >
          {mutation => {
            const addMutation = reaction => {
              if (authenticated) {
                return mutation({
                  variables: { subjectId, content: reaction },
                });
              }
              const shouldAuthenticate = confirm(message);
              if (shouldAuthenticate) {
                authenticate();
              }
            };

            return children(addMutation);
          }}
        </Mutation>
      )}
    </Authentication>
  );
}
