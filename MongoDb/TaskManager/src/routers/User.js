const express=require("express")
const User=require("../models/user")
const router =new express.Router();

app.post("/users", async (req, res) => {
    const user = new User(req.body);
  
    try {
      await user.save();
      res.status(201).send(user);
    } catch (e) {
      res.status(404).send(e);
    }
  });


  app.get("/users/:id", async (req, res) => {
    const _id = req.params.id;
  
    try {
      const user = await User.findById(_id);
      if (!user) {
        return res.status(404).send();
      }
      res.status(200).send("User Found: " + user);
    } catch (e) {
      res.status(404).send(e);
    }
  });

  
app.get("/users", async (req, res) => {
    try {
      const users = await User.find({});
  
      if (!users) return res.status(400).send();
  
      res.status(200).send(users);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  