const express = require("express");
require('../src/db/mongoose')
const User=require('../src/models/user')

const app = express();
const port = process.env.PORT || 3000;

app.post("/users", (req, res) => {
  res.send("Testing!");
});

app.listen(port, () => {
  console.log("Server is Up!");
});
