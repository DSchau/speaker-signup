import React from 'react';
import styled from 'react-emotion';
import GatsbyLink from 'gatsby-link';

import { AuthenticatedQuery, Block, Issue } from '..';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;

  padding: 1rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 50% 50%;
  }
`;

const Link = styled(GatsbyLink)`
  display: block;
  color: #aaa;
  font-size: 14px;
  text-align: center;
  padding: 0.5rem 0;
`;

export function Issues({ list, title = 'Open proposals' }) {
  const last = list.pop().node.id;
  return (
    <Block
      title={title}
      children={() => (
        <AuthenticatedQuery
          query={`
          query getNewIssues($after: String!) {
            repository(owner: "nebraskajs", name: "speaker-signup") {
              issues(after: $after, last: 50) {
                edges {
                  node {
                    id
                    author {
                      avatarUrl
                      login
                      url
                    }
                    bodyHTML
                    state
                    title
                    url
                    createdAt
                    reactions(first:10) {
                      edges {
                        node {
                          content
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `.trim()}
          variables={{ after: last }}
        >
          {({ data }) => {
            return (
              <React.Fragment>
                <Grid>
                  {list.map(({ node }) => <Issue key={node.id} {...node} />)}
                </Grid>
                {title.indexOf('Open') > -1 ? (
                  <Link to="/closed">Check out closed proposals</Link>
                ) : (
                  <Link to="/">Check out open proposals</Link>
                )}
              </React.Fragment>
            );
          }}
        </AuthenticatedQuery>
      )}
    />
  );
}
