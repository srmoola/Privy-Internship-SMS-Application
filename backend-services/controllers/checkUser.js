"use strict";
// Remember to destructure using the model name found in the model file
const { Users } = require("../models");

// Get the information from the routes, and parse it
const checkUser = async (req, res) => {
  const validate = await Users.findOne({
    where: { email: req.body.email, password: req.body.password },
  });

  if (validate === null) {
    res.send({ Response: 400, Detail: "User Not Found!" });
  } else {
    res.send({ Response: 200, Detail: "User Found!" });
  }
};

module.exports = checkUser;
