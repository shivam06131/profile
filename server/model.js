const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  number: {
    type: Number,
  },
  gender: {
    type: String,
  },
  city: {
    type: String,
  },
  passWord: {
    type: String,
  },
  confirmPassWord: {
    type: String,
  },
  profilePic: {
    type: String,
  },
});

//collection
const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;
