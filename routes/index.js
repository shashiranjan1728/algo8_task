const express = require('express');
const router = express.Router();
const algo8User = require('../controller/users');
// const validator = require('../middleware/apiValidator');
const productController = require('../controller/products')
    /**
     *  routes for creating user
     */

router.post('/user', algo8User.userCreate);
router.post('/user-login/', algo8User.userLogIn);
router.get('/users/', algo8User.userList);

router.post("/create", productController.createProduct);
router.get("/getproducts", productController.getProducts);
router.get("/getproducts/:id", productController.getProductById);
router.delete("/deleteproduct/:id", productController.removeProduct);


const cartController = require('../controller/cart');
router.post("/additem", cartController.addItemToCart);
router.get("/getcart", cartController.getCart);
router.delete("/empty-cart", cartController.emptyCart);


module.exports = router;