export const ISSUES_QUERY = `
  query getNewIssues($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      issues(last: 50) {
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
                  id
                  user {
                    avatarUrl
                    login
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
