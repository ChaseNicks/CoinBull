const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
  }

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

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
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
    addOrder(products: [ID]!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
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
