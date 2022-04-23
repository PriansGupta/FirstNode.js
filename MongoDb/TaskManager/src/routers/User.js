const express = require("express");
const User = require("../models/user");
const auth = require("../middlewares/auth");
const router = new express.Router();
const multer = require("multer");

const upload = multer({
  limits: {
    fileSize: 2000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png)$/)) {
      return cb(new Error("Please upload an Image"));
    }

    cb(undefined, true);
  },
});

router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(404).send(e);
  }
});

router.get("/users/:id", async (req, res) => {
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

router.get("/users", auth, async (req, res) => {
  res.send(req.user);
});

router.patch("/users", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const AllowedUpdates = ["name", "email", "age", "password"];
  const isValid = updates.every((update) => {
    return AllowedUpdates.includes(update);
  });

  if (!isValid) return res.status(400).send({ Error: "Invalid Updates" });

  try {
    const user = req.user;

    updates.forEach((update) => {
      user[update] = req.body[update];
    });

    await user.save();
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/users", auth, async (req, res) => {
  try {
    await req.user.remove();
    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateToken();

    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.users.tokens.filter((token) => {
      return token !== req.token;
    });

    await req.user.save();

    res.send(req.user);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post(
  "/users/upload/avatar",
  auth,
  upload.single("avatar"),
  async (req, res) => {
    req.user.avatar = req.file.buffer;
    await req.user.save();
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router.delete("/users/upload/avatar",auth,async (req,res)=>{
  req.user.avatar=undefined
  await req.user.save()

  res.send()
})

module.exports = router;
