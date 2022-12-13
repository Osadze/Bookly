const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

router.get("/", productsController.getProducts);
router.get("/shop/products-list", productsController.getAllProducts);
module.exports = router;
