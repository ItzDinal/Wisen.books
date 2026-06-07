const { books } = require('../data/dummyData');

const render = (res, view, title, data = {}) => {
  res.render(view, {
    layout: 'layouts/main',
    title,
    ...data
  });
};

const home = (req, res) => {
  const featuredBooks = books.filter((book) => book.featured);
  render(res, 'pages/index', 'Wisen Book Mart | Home', {
    featuredBooks: featuredBooks.length ? featuredBooks : books.slice(0, 4),
    bestsellingBooks: books.slice(0, 4)
  });
};

const shop = (req, res) => {
  render(res, 'pages/shop', 'Wisen Book Mart | Shop', { books });
};

const bookDetails = (req, res, next) => {
  const id = req.params.id;
  const book = books.find((item) => item.id === id || item.slug === id);
  if (!book) return next();

  const relatedBooks = books.filter((item) => item.id !== book.id).slice(0, 4);
  render(res, 'pages/book', `Wisen Book Mart | ${book.title}`, { book, relatedBooks });
};

const cart = (req, res) => render(res, 'pages/cart', 'Wisen Book Mart | Cart');
const checkout = (req, res) => render(res, 'pages/checkout', 'Wisen Book Mart | Checkout');
const blog = (req, res) => render(res, 'pages/blog', 'Wisen Book Mart | Blog');
const contact = (req, res) => render(res, 'pages/contact', 'Wisen Book Mart | Contact');

module.exports = {
  home,
  shop,
  bookDetails,
  cart,
  checkout,
  blog,
  contact
};
