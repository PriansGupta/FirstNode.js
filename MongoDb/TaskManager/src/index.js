require("../src/db/mongoose");
const express = require("express");
const User = require("../src/models/user");
const Task = require("../src/models/tasks");
const e = require("express");
const app = express();
const port = process.env.PORT || 3000;
const UserRouter = require("../src/routers/User");
const TaskRouter = require("../src/routers/Task");

app.use(express.json());

app.use(UserRouter);

app.use(TaskRouter);

app.listen(port, () => {
  console.log("Hurray!!...Server is Running");
});
