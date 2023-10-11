var express = require("express"),
  router = express.Router();

const checkUser = require("../controllers/checkUser");

router.post("/", checkUser);

module.exports = router;
