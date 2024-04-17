const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");
const validator = require("validator");
const Schema = mongoose.Schema;

// Defining out Schema structure.

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    password: {
      type: String,
      required: [true, "Please insert password"],
      minlength: [6, "Minimum password length is 6 character"],
    },
  },
  { timestamps: true }
);

// user schema statics code for signup and login

userSchema.statics.LoginUser = async function (name, password) {
  // validation
  if (!name || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ name });
  if (!user) {
    throw Error("Incorrect name");
  }
  const auth = await bcrypt.compare(password, user.password);
  if (!auth) {
    throw Error("Incorrect password");
  }
  return user;
};

userSchema.statics.SignUp = async function (name, password) {
  // validation
  if (!name || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  const userName = await this.findOne({ name });

  if (userName) {
    throw Error("Name already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ name, password: hash });

  return user;
};

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;