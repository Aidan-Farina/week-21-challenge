const { Book, User } = require('../models');

const searchGoogleBooks = async (query) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  const data = await response.json();
  return data.items.map(item => ({
    bookId: item.id,
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors,
    description: item.volumeInfo.description,
    image: item.volumeInfo.imageLinks?.thumbnail,
    link: item.volumeInfo.previewLink
  }));
};

const resolvers = {
  Query: {
    searchBooks: (_, { query }) => searchGoogleBooks(query)
  },
  user: async (parent, { username }) => {
    return User.findOne({ username }).populate('savedBooks');
  },
  books: async () => {
    return Book.find({});
  },

  };