const express = require("express");
const UserRouter = require("../src/routers/User");
const TaskRouter = require("../src/routers/Task");
const multer=require("multer")

require("../src/db/mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.use(UserRouter);
app.use(TaskRouter);

const upload=multer({
  dest:"images"
})

app.post("/upload",upload.single("upload"),(req,res)=>{
res.send();
})

app.listen(port, () => {
  console.log("Server is Up on "+port);
});
