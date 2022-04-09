
const express=require("express")
const User=require("../models/user")
const router =new express.Router();


app.post("/tasks", async (req, res) => {
    const task = new Task(req.body);
  
    try {
      await task.save();
      res.status(201).send(task);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  
  
  app.get("/tasks/:id", async (req, res) => {
    const _id = req.params.id;
  
    try {
      const task = await Task.findById(_id);
  
      if (!task) {
        return res.status(404).send();
      }
      res.status(200).send("Task Found: " + task);
    } catch (e) {
      res.status(404).send(e);
    }
  });
  