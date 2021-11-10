import { gql } from "@apollo/client";

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

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_FAVORITE = gql`
  mutation addFavorite($input: favorite!) {
    addFavorite(input: $input) {
      _id
      firstName
      lastName
      email
      favorites {
        # _id
        name
        ticker
        price
        dayPercentChange
        volume
        marketCap
        logoURL
      }
    }
  }
`;

export const REMOVE_COIN = gql`
  mutation removeCoinFromFavorite($name: String!) {
    removeCoinFromFavorite(name: $name) {
      firstName
      lastName
      email
      favorites {
        # _id
        name
        ticker
        price
        dayPercentChange
        volume
        marketCap
        logoURL
      }
    }
  }
`;
