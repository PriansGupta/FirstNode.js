require("../src/db/mongoose")
const User=require("../src/models/user")

User.findById("62449d528a95f03e701d7c02",{age:23}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:1})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})