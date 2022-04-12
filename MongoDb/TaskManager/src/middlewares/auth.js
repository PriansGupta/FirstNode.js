
const auth=async (req,res,next)=>{

    console.log("This is a middleware")
next();
}

module.exports=auth;
