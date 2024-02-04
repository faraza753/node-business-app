const express = require('express');
const auth = require('../middleware/auth');
const {addProducts, getProducts, updateProduct, deleteProduct} = require('../controllers/productController');

const router = express.Router();

router.post('/product', auth, addProducts);
router.get('/product', auth,  getProducts);
router.patch('/product/:id', auth, updateProduct);
router.delete('/product/:id', auth, deleteProduct);


module.exports = {
    routes: router
}
