import express from 'express';
import storeController from '../controllers/storeController.js';

const router = express.Router();

router.get('/', storeController.home);
router.get('/shop', storeController.shop);
router.get('/book/:id', storeController.bookDetails);
router.get('/cart', storeController.cart);
router.get('/checkout', storeController.checkout);
router.get('/blog', storeController.blog);
router.get('/contact', storeController.contact);
router.get('/login', (req, res) => res.render('pages/login', { title: 'Login | Wisen Book Mart' }));
router.get('/register', (req, res) => res.render('pages/register', { title: 'Register | Wisen Book Mart' }));


export default router;