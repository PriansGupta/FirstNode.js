const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const TaskSchema = new Schema(
  {
    Description: {
      type: String,
      required: true,
      validate(value) {
        if (value.length == 0)
          throw new Error("Description length cannot be zero");
      },
    },
    Completed: {
      type: Boolean,
      required: true,
    },
    Owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Tasks", TaskSchema);

module.exports = Task;
