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
    price: Int
    hourPercentChange: Int
    dayPercentChange: Int
    weekPercentChange: Int
    volume: Int
    marketCap: Int
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
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
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
    _id: ID
    name: String
    ticker: String
    price: Int
    hourPercentChange: Int
    dayPercentChange: Int
    weekPercentChange: Int
    volume: Int
    marketCap: Int
    logoURL: String
  }

`;

module.exports = typeDefs;
