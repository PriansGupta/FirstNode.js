const jwt=require("jsonwebtoken")
const User=require("../models/user")

const auth=async (req,res,next)=>{

try{

    const token=req.header("Authorization")

}
catch(e){

    res.status(401).send({error:"Please Authenticate"})
}
next();
}

module.exports=auth;
