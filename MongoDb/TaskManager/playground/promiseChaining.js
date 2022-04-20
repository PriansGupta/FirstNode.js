require("../src/db/mongoose");
const User = require("../src/models/user");
const Task = require("../src/models/tasks");

User.findByIdAndUpdate("62449d528a95f03e701d7c02", { age: 47 })
  .then((user) => {
    
    
  })
  .then((result) => {
    
  })
  .catch((e) => {
    
  });

Task.findByIdAndDelete("62499dc7b471a4178c993b71")
  .then((user) => {

    
  })
  .then((result) => {

  })
