const express = require("express");
const Task = require("../models/tasks");
const auth = require("../middlewares/auth");
const router = new express.Router();

router.post("/tasks", auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    Owner: req.user._id,
  });

  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/tasks/:id",auth, async (req, res) => {
    
    const _id=req.params._id

  try {
    const task = await Task.findOne({_id,owner:req.user._id});
    console.log(task)

    if (!task) {

      return res.status(404).send();
    }
    res.status(200).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/tasks",auth,(req,res)=>{

    try{

        await req.user.populate("tasks").execPopulate()
        res.send(req.user.tasks)
    }catch(e){
res.status(500).send();
    }

})

module.exports = router;
