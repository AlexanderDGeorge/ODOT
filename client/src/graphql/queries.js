import gql from "graphql-tag";

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
    curUserId
  }
`;

export const CUR_USER = gql`
  query IsUserLoggedIn {
    curUserId @client
  }
`

export const FETCH_USER = gql`
  query fetchUser($id: ID!) {
    user(id: $id) {
      id
      name
      odots {
        id
        title
      }
    }
  }
`;

export const FETCH_ODOT = gql`
  query fetchOdot($id: ID!) {
    odot(id: $id) {
      id
      title
    }
  }
`;