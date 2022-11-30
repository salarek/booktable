const router = require("express").Router();
const Users = require("../models/Users");
const bcrypt = require("bcrypt");
router.post("/", (req, res) => {
  console.log("KURWY", req.body);
  const newUser = new Users({
    email: req.body.email,
    name: req.body.name,
    password: bcrypt.hashSync(req.body.password, 10),
  });
  newUser.save((err) => {
    if (err) {
      return res.status(400).json({
        title: "error",
        error: err,
      });
    }
    return res.status(200).json({
      title: "signup success",
    });
  });
});

module.exports = router;
