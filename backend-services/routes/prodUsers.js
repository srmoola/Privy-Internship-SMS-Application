var express = require("express"),
  router = express.Router();

const createProdUser = require("../controllers/prodUsers");

router.post("/", createProdUser);

module.exports = router;
