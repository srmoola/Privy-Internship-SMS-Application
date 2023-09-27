var express = require("express"),
  router = express.Router();

const CreateCustomerMessageController = require("../controllers/customerMessage");

router.post("/", CreateCustomerMessageController);

module.exports = router;
