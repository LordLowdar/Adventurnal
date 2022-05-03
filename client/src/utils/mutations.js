import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_CHARACTER = gql`
  mutation addCharacter(
    $name: String!
    $race: String!
    $className: String!
    $level: Int
  ) {
    addCharacter(
      name: $name
      race: $race
      className: $className
      level: $level
    ) {
      _id
      name
      race
      className
      level
      journal {
        _id
        title
        session
        contents
        tags
      }
    }
  }
`;

export const ADD_JOURNALENTRY = gql`
  mutation addJournalEntry(
    $characterId: ID!
    $title: String!
    $session: String!
    $contents: String!
    $tags: [String]
  ) {
    addJournalEntry(
      characterId: $characterId
      title: $title
      session: $session
      contents: $contents
      tags: $tags
    ) {
      journal {
        title
      }
    }
  }
`;
