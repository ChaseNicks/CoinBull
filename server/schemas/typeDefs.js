const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type Favorite {
    _id: ID
    name: String
    ticker: String
    price: String
    dayPercentChange: String
    volume: String
    marketCap: String
    logoURL: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    favorites: [Favorite]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    users: [User]
    getFavoriteCoins: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addFavorite(input: favorite!): User
    removeCoinFromFavorite(name: String!): User
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
  }

  input favorite {
    name: String
    ticker: String
    price: String
    dayPercentChange: String
    volume: String
    marketCap: String
    logoURL: String
  }
`;

module.exports = typeDefs;
