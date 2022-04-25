const express = require("express");

const router = express.Router();

// use take Path variable , and return the file
//==> /admin/add-product  ==> GET
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" ></input><button type="submit">submit</button></form>'
  );
});

//==> /admin/add-product ==> POST
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
