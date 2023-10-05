"use strict";
// Remember to destructure using the model name found in the model file
const { Customer } = require("../models");

// Get the information from the routes, and parse it
const createCustomer = async (req, res) => {
  try {
    await Customer.create({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      user_id: req.body.user_id,
    });
  } catch (error) {
    res.send({ ERROR: error.name, DETAIL: error.parent.detail });
    return;
  }

  res.send({ Response: 200 });
};

module.exports = createCustomer;
