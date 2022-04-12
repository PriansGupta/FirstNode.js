const express = require("express");
const UserRouter = require("../src/routers/User");
const TaskRouter = require("../src/routers/Task");
require("../src/db/mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use((req,res,next)=>{
  res.send("Site is under maintenance.Please try Later")
})

app.use(UserRouter);
app.use(TaskRouter);

app.listen(port, () => {
  console.log("Hurray!!...Server is Running");
});
