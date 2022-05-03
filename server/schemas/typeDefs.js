const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    characters: [Character]
  }
  type Journal {
    _id: ID
    title: String
    session: String
    contents: String
    tags: String
  }

  type Character {
    _id: ID
    name: String
    race: String
    className: String
    level: Int
    journals: [Journal]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
    characters(userId: ID!): [Character]
    journals(characterId: ID!): [Journal]
    currentCharacters: [Character]
    character(characterId: ID!): Character
    journal(journalId: ID!): Journal
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    addCharacter(name: String!, race: String!, className: String!, level: Int): Character

    addJournal(
      title: String!
      session: String!
      contents: String!
      tags: [String]
    ): Journal

    removeUser(userId: ID!): User

    removeCharacter(characterId: ID!): Character

    removeJournal(journalId: ID!): Journal

    updateUser(email: String, password: String): User

    updateCharacter(
      characterId: ID!
      name: String
      race: String
      level: Int
    ): Character

    updateJournal(
      journalId: ID!
      title: String
      session: String
      contents: String
      tags: [String]
    ): Journal
  }
`;

module.exports = typeDefs;
