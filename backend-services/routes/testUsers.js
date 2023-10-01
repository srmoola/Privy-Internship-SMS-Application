var express = require("express"),
  router = express.Router();

const CreateCustomerMessageController = require("../controllers/testUsers");

router.post("/", CreateCustomerMessageController);

module.exports = router;
