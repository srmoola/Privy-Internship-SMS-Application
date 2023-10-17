"use strict";
// Remember to destructure using the model name found in the model file
const { Users } = require("../models");

// Get the information from the routes, and parse it
const getUserInfo = async (req, res) => {
  const validate = await Users.findAll({
    where: { id: Number(req.body.USER_ID) },
  });
  res.send(validate[0]);
};

module.exports = getUserInfo;
