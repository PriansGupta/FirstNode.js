const mongoose = require("mongoose");

const Task = mongoose.model("Tasks", {
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
  Owner:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
  }
});

module.exports = Task;
