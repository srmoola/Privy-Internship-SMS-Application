"use strict";
// Remember to destructure using the model name found in the model file
const { Users } = require("../models");

// Get the information from the routes, and parse it
const createProdUser = async (req, res) => {
  if (req.body.length != 4) {
    res.send({ ERROR: 300, DETAIL: "Information Missing!" });
    return;
  }

  try {
    await Users.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    });
  } catch (error) {
    res.send(error);
    return;
  }

  res.send({
    RESPONSE: 200,
    DETAIL: "Customer has been successfully created!",
  });
};

module.exports = createProdUser;
