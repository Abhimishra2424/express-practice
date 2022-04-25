const express = require("express");
const app = express();
const port = 3000;
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

// orders is matter of the order of the routes
app.use(adminRoutes);
app.use(shopRoutes);

// 404 error
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(port, () => {
  console.log(`Example 
  app listening at 
  http://localhost:${port}`);
});
