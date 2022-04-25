const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

// use take Path variable , and return the file
app.use("/add", (req, res, next) => {
  res.send(
    '<form action="/users" method="POST"><input type="text" name="title" ></input><button type="submit">submit</button></form>'
  );
});

app.get("/users", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example 
  app listening at 
  http://localhost:${port}`);
});
