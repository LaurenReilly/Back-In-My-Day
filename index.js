const express = require("express");
const ejs = require("ejs");
const app = express();
const path = require("path");
const about = require("./app/about");
const login = require("./app/login");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "app/views");

app.use("/", about);
app.use("/", login);

app.get("/", function(req, res, next) {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Starting app on ${PORT}`);
});
