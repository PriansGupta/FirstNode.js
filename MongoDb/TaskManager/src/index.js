const e = require("express");
const express = require("express");
require("../src/db/mongoose");
const User = require("../src/models/user");

const app = express();
const port = process.env.PORT || 3000;

app.post("/users", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((e) => {
      res.send(e);
    });
});

app.listen(port, () => {
  console.log("Server is Up!");
});
