const express = require("express");
const rootDir = require("../util/path");
const path = require("path");

const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res) => {
  console.log("shop.js",adminData.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
