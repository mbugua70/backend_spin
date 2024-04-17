const mongoose = require("mongoose");
const UserModel = require("../models/userLogin");
const jwt = require("jsonwebtoken");

// createToken method

const createToken = ({ _id }) => {
  // the first arguement is usually the payload
  // second arg is the secret string
  // third arg its an optional parameter
  return jwt.sign({ _id }, process.env.SECRET_STRING, { expiresIn: "3d" });
};

module.exports.loginUser = async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await UserModel.LoginUser(name, password);
    const token = createToken(user._id);
    res.status(200).json({ name, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports.signUpUser = async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await UserModel.SignUp(name, password);
    const token = createToken(user._id);
    res.status(200).json({ name, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
