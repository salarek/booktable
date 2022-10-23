const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./db.js"); // DB connection
const cors = require("cors");

const cities = require("./routes/cities.js");
dotenv.config();
const PORT = process.env.PORT || 5000;
const mode = process.env.NODE_ENV;

connectDB();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;

app.use("/cities", cities);

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("listen on port", port);
});
