"use strict";
// Remember to destructure using the model name found in the model file
const { TestUsers } = require("../models");

// Get the information from the routes, and parse it
const CreateCustomerMessage = async (req, res) => {
  await TestUsers.create({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
  });

  res.send({ ...req.body });
};

module.exports = CreateCustomerMessage;
