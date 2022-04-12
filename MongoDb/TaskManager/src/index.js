const express = require("express");
const UserRouter = require("../src/routers/User");
const TaskRouter = require("../src/routers/Task");
require("../src/db/mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use((req,res,next)=>{
  
    console.log(req.method,req.path)
    next();
})

app.use(UserRouter);
app.use(TaskRouter);

app.listen(port, () => {
  console.log("Hurray!!...Server is Running");
});
