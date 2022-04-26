const path = require("path");

const express = require("express");
const productCtrl = require("../controllers/products");

const router = express.Router();

router.get("/", productCtrl.getProducts);

module.exports = router;
