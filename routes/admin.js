const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();

const products = [];

// use take Path variable , and return the file
//==> /admin/add-product  ==> GET
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

//==> /admin/add-product ==> POST
router.post("/add-product", (req, res, next) => {
  products.push({
    title: req.body.title,
  });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
