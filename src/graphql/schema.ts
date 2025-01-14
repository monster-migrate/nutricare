import gql from "graphql-tag";

export const typeDefs = gql`
  enum UserRole {
    Admin
    Pantry
    Delivery
  }

  type User {
    name: String!
    email: String!
    password: String!
    phone: String!
    role: UserRole!
    resume: String
    notes: String
    address: String
    createdAt: String!
    updatedAt: String!
  }
  type Mutation {
    createUser(
      name: String!
      email: String!
      password: String!
      phone: String!
      role: UserRole!
      address: String
      resume: String
      notes: String
    ): User
    updateUser(
      email: String!
      name: String
      password: String
      phone: String
      address:String
      role: UserRole
    ): User
    deleteUser(email: String!): User
  }

  type Query {
    getUser(email: String!): User
    getUsers: [User!]
  }
`;
