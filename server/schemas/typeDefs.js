const typeDefs = `
  type Book {
    bookId: ID
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
  }

  type Query {
    user: User  
    books: [Book]
    searchBooks(query: String!): [Book]
  }
`;

module.exports = typeDefs;