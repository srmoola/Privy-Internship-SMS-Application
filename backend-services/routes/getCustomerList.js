var express = require("express"),
  router = express.Router();

const getCustomerController = require("../controllers/getCustomerList");

router.post("/", getCustomerController);

module.exports = router;
