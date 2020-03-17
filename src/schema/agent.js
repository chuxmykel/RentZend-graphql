import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    agents: [Agent!]
    agent(id: ID!): Agent
  }

  extend type Mutation {
    createAgent(
      name: String!
      email: String!
      phoneNumber: String!
      address: String!
      zipCode: String!
      passport: String!
    ): Agent!
  }

  type Agent {
    id: ID!
    name: String!
    email: String!
    phoneNumber: String!
    address: String!
    zipCode: String!
    passport: String!
  }
`;
