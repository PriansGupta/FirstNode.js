const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Task = require("./tasks");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) throw new Error("Age must be Positive");
    },
  },
  password: {
    type: String,
    required: true,
    validate(value) {
      if (value < 6) throw new Error("Minimum Length should be 6");
    },
  },
  tokens: [
    {
      token: { type: String, required: true },
    },
  ],
});

UserSchema.pre("remove", async function (next) {
  const user = this;
  await Task.deleteMany({ owner: user._id });
  next();
});

UserSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "Owner",
});

UserSchema.methods.generateToken = async function () {
  const user = this;

  const token = jwt.sign({ _id: user._id.toString() }, "INeedToLearnThis");

  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

UserSchema.methods.toJSON = function () {
  const user = this;

  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email: email });

  if (!user) throw new Error("Unable to Login");

  const isMatch = await bcrypt.compare(password, user.password);
  console.log(isMatch);

  if (!isMatch) {
    throw new Error("Unable to Login");
  }

  return user;
};

UserSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
