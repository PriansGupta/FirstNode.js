const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt=require("bcrypt")

const UserSchema=new mongoose.Schema( {
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
    password:{
        type:String,
        required:true,
        validate(value){
            if(value<6) throw new Error("Minimum Length should be 6")
        }
    }
  });


  UserSchema.statics.findByCredentials=async (email,password)=>{
      const user=await User.findOne({email})
      
  }

  UserSchema.pre('save',async function(next){
    const user=this;

    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8)
    }

    next();
  })

const User = mongoose.model("User",UserSchema);

module.exports = User;
