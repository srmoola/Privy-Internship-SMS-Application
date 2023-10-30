var express = require("express"),
  router = express.Router();

const sendMessageController = require("../controllers/sendMessage");

router.post("/", sendMessageController);

module.exports = router;
