import { gql } from '@apollo/client';

export const ME = gql`
  query me {
    me {
      _id
      email
      characters {
        name
      }
    }
  }
`;
