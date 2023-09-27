var express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  res.send("Visiting the Test Route!");
});

module.exports = router;
