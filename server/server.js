const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./db.js"); // DB connection
const cors = require("cors");

const cities = require("./routes/cities.js");
const signup = require("./routes/signup.js");
const login = require("./routes/login.js");
dotenv.config();
const PORT = process.env.PORT || 5000;
const mode = process.env.NODE_ENV;

connectDB();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.json());
//routes
app.use("/cities", cities);
app.use("/signup", signup);
app.use("/login", login);

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("listen on port", port);
});
