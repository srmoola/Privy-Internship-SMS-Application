var express = require("express"),
  router = express.Router();

const textMessageController = require("../controllers/textMessage");

router.post("/", textMessageController);

module.exports = router;
