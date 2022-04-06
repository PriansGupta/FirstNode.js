require("../src/db/mongoose");
const express = require("express");
const User = require("../src/models/user");
const Task = require("../src/models/tasks");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    console.log(e);
  }

  //   user
  //     .save()
  //     .then(() => {
  //       res.status(201).send(user);
  //     })
  //     .catch((e) => {
  //       res.status(400).send(e);
  //     });
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.get("/users/:id", (req, res) => {
  const _id = req.params.id;

  User.findById(_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send();
      }
      res.status(200).send("User Found: " + user);
    })
    .catch((e) => {
      res.status(404).send(e);
    });
});

app.get("/users", (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((e) => {
      res.status(500).send();
    });
});
app.get("/tasks/:id", (req, res) => {
  const _id = req.params.id;

  Task.findById(_id)
    .then((task) => {
      if (!task) {
        return res.status(404).send();
      }
      res.status(200).send("Task Found: " + task);
    })
    .catch((e) => {
      res.status(404).send(e);
    });
});

const Delete = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ Completed: false });

  return count;
};

Delete("624d9db74894a20640df0c87")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(port, () => {
  console.log("Hurray!!...Server is Running");
});
