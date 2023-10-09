"use strict";
// Remember to destructure using the model name found in the model file
const { Customer } = require("../models");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePhoneNumber = (phone) => {
  return String(phone)
    .toLowerCase()
    .match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);
};

// Get the information from the routes, and parse it
const createCustomer = async (req, res) => {
  if (!validateEmail(req.body.email)) {
    res.send({ Response: 200, Detail: "Invalid Email" });
    return;
  }

  if (!validatePhoneNumber(req.body.phoneNumber)) {
    res.send({ Response: 200, Detail: "Invalid Phone Number" });
    return;
  }

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
