const express = require("express");
const PORT = 3000,

var app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server started. Listening to Port " + PORT);
});
