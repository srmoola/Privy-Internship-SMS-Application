"use strict";
// Remember to destructure using the model name found in the model file
const { Customer } = require("../models");

// Get the information from the routes, and parse it
const createCustomer = async (req, res) => {
  await Customer.create({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
  });

  res.send({ ...req.body });
};

module.exports = createCustomer;
