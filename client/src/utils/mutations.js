import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($userData: LoginInput!) {
    loginUser(userData: $userData) {
      // fields you want to retrieve after logging in
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($userData: UserType!) {
    createUser(userData: $userData) {
      // fields you want to retrieve after creating, e.g., id, name, etc.
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      // fields you want to retrieve after saving the book.
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($bookId: ID!) {
    deleteBook(bookId: $bookId) {
      // fields you want to retrieve after deleting the book.
    }
  }
`;