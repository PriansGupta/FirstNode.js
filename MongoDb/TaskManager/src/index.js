const express = require("express");
require("../src/db/mongoose");
const User = require("../src/models/user");
const Task = require("../src/models/tasks");


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.post("/tasks",(req,res)=>{
    
})


app.listen(port, () => {
  console.log("Server is Up!");
});
