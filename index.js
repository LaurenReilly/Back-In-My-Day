const express = require("express");
const ejs = require("ejs");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Starting app on ${PORT}`);
});
