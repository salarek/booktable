const router = require("express").Router();
const Cities = require("../models/Cities");

router.get("/", (req, res) => {
  // let user = req.headers.username;
  Cities.find((err, citi) => {
    if (err) return console.log(err);
    return res.status(200).json({
      cities: citi,
    });
  });
});

module.exports = router;
