const mongoose = require("mongoose");
const validator = require("validator");

const Task = mongoose.model("Tasks", {
    Description: {
      type: String,
      required: true,
      validator(value)
      {
       if(value.length==0)   
       throw new Error("Description length cannot be zero")
      }
    },
    Completed: {
      type: Boolean,
      required: true,
     
    },
  });