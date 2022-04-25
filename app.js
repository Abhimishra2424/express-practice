const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// orders is matter of the order of the routes
//http://localhost:3000/admin/add-product
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "page-notFound.html"));
});

app.listen(port, () => {
  console.log(`Example 
  app listening at 
  http://localhost:${port}`);
});
