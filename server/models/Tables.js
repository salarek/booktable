const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tablesSchema = new Schema({
  name: String,
  user: String,
  achievements: Object,
  globalDays: Number,
});
const Tables = mongoose.model("Tables", tablesSchema);
module.exports = Tables;
