require("../src/db/mongoose")
const User=require("../src/models/user")

User.findById("62449aab9bf8be08bc318032",{age:1}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:1})
})