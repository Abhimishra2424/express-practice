const path = require("path");

const express = require("express");

const productCtrl = require("../controllers/products");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", productCtrl.getAllProducts);

// /admin/add-product => POST
router.post("/add-product", productCtrl.postAddProduct);

module.exports = router;
