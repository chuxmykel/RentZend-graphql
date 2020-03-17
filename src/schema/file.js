import { gql } from 'apollo-server-express';

export default gql`
  extend type Mutation {
    singleUpload(file: Upload!): File!
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
    url: String!
  }
`;
