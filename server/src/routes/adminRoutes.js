import express from 'express';
import adminController from '../controllers/adminController.js';

const router = express.Router();

router.get('/', (req, res) => res.redirect('/admin/login'));
router.get('/login', adminController.login);
router.get('/dashboard', adminController.dashboard);
router.get('/books', adminController.booksIndex);
router.get('/books/create', adminController.booksCreate);
router.get('/books/edit/:id', adminController.booksEdit);
router.get('/orders', adminController.ordersIndex);
router.get('/orders/details/:id', adminController.orderDetails);
router.get('/categories', adminController.categoriesIndex);

export default router;