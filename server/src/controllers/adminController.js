import { books, categories } from '../data/dummyData.js';

const render = (res, view, title, data = {}) => {
  res.render(view, { layout: 'layouts/main', title, ...data });
};

const login = (req, res) => render(res, 'admin/login', 'Admin Login');

const dashboard = (req, res) => {
  render(res, 'admin/dashboard', 'Admin Dashboard', {
    dashboard: { totalBooks: books.length, totalOrders: 482, totalCustomers: 912, revenue: 24920 },
    books
  });
};

const booksIndex = (req, res) => render(res, 'admin/books/index', 'Admin | Books', { books });
const booksCreate = (req, res) => render(res, 'admin/books/create', 'Admin | Create Book');
const booksEdit = (req, res) => render(res, 'admin/books/edit', 'Admin | Edit Book');
const ordersIndex = (req, res) => render(res, 'admin/orders/index', 'Admin | Orders');
const orderDetails = (req, res) => render(res, 'admin/orders/details', 'Admin | Order Details');
const categoriesIndex = (req, res) => render(res, 'admin/categories/index', 'Admin | Categories', { categories });

export default { login, dashboard, booksIndex, booksCreate, booksEdit, ordersIndex, orderDetails, categoriesIndex };