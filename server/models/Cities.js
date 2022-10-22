const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citiesSchema = new Schema({
  citi: String,
  locals: Array,
});
const Cities = mongoose.model("Cities", citiesSchema);
module.exports = Cities;
