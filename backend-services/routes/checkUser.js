var express = require("express"),
  router = express.Router();

const checkUser = require("../controllers/checkUser");
const getUserInfo = require("../controllers/getUserInfo");

router.post("/", checkUser);
router.post("/get-user-info", getUserInfo);

module.exports = router;
