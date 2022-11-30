const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userBookTableSchema = new Schema({
  name: {
    unique: true,
    type: String,
  },
  email: {
    unique: true,
    type: String,
  },
  password: String,
});
const Users = mongoose.model("users", userBookTableSchema);
module.exports = Users;
