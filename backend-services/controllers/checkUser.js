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
    const id = await Users.findAll({
      where: { email: req.body.email },
    });

    res.send({
      RESPONSE: 200,
      DETAIL: "Customer has been successfully created!",
      USER_ID: id[0].dataValues.id,
    });
  }
};

module.exports = checkUser;
