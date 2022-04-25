const express = require("express");
const path = require("path");
const router = express.Router();

// use take Path variable , and return the file
//==> /admin/add-product  ==> GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

//==> /admin/add-product ==> POST
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
