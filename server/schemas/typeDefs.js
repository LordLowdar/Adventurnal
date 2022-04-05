const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    username: String
    specialty: [Specialty]
    postings: [Posting]
  }

  type Specialty {
    _id: ID
    name: String
    users: [User]
    postings: [Posting]
  }
  type Posting {
    _id: ID
    title: String
    description: String
    user: [User]
    collaborators: [User]
    seeking: [Specialty]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    users: [User]
    posting: Posting
    postings: [Posting]
    specialty: Specialty
    specialties: [Specialty]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, username: String! email: String!, password: String! specialty: Int!): Auth
    updateUser(firstName: String, lastName: String, username: String email: String, password: String specialty: Int): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
