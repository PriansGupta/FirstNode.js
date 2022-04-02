const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Not a Valid Email");
      }
    },
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) throw new Error("Age must be Positive");
    },
  },
});

module.exports = User;
