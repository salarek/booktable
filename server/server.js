const express = require("express");
const mongoose = require("mongoose");
// const Cities = require("./models/Cities");
const cities = require("./routes/cities.js");
mongoose.connect("mongodb://localhost:27017/bookTableLocal");
mongoose.connection.on("error", (err) => {
  console.log("Could not connect to the database. Exiting now...");
  process.exit();
});
const app = express();

const port = process.env.PORT || 5000;

app.use("/cities", cities);
app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("listen on port", port);
});
