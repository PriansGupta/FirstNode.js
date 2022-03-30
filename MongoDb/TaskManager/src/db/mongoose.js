const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required:true
  },
  age: {
    type: Number,
    validate(value){
    if(value<0)
    throw new Error("Age must be Positive")
    }
  },
});

const Task = mongoose.model("Tasks", {
  Description: {
    type: String,
    required:true
  },
  Completed: {
    type: Boolean,
  },
});

const NewTask1 = new Task({
  Description: "Studying SSD",
  Completed: false,
});

// const NewTask2 = new Task({
//   Description: "Studying DE",
//   Completed: false,
// });

// NewTask2.save()
//   .then(() => {
//     console.log(NewTask2);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

NewTask1.save()
  .then(() => {
    console.log(NewTask1);
  })
  .catch((error) => {
    console.log(error);
  });

const me = new User({
  name: "Suneeta",
  age: -47,
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log(error);
  });