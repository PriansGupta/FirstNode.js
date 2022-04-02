const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
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


const me = new User({
  name: "Priyanssh",
  age: 20,
  email:"priyanshg615@gmal.com"
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log(error);
  });
