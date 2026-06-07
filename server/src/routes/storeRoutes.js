const express = require('express');
const storeController = require('../controllers/storeController');

const router = express.Router();

router.get('/', storeController.home);
router.get('/shop', storeController.shop);
router.get('/book/:id', storeController.bookDetails);
router.get('/cart', storeController.cart);
router.get('/checkout', storeController.checkout);
router.get('/blog', storeController.blog);
router.get('/contact', storeController.contact);

module.exports = router;
