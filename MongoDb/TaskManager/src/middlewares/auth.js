const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ","");
    const decoded=jwt.verify(token,"INeedToLearnThis")
    console.log(token);
  } catch (e) {
    res.status(401).send({ error: "Please Authenticate" });
  }
  next();
};

module.exports = auth;
