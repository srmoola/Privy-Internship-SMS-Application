var express = require("express"),
  router = express.Router();

const customerController = require("../controllers/customers");

router.post("/", customerController);

module.exports = router;
