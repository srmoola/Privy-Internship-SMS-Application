"use strict";
const { response } = require("express");
// Remember to destructure using the model name found in the model file
const { Customer } = require("../models");

// Get the information from the routes, and parse it
const getCustomerByEmail = async (req, res) => {
  Customer.findAll({
    where: {
      userEmail: req.body.userEmail,
    },
  }).then((response) => {
    console.log(response);
    res.send(response);
  });

  //   res.send("Hello World");
};

module.exports = getCustomerByEmail;
