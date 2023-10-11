"use strict";
// Remember to destructure using the model name found in the model file
const { Users } = require("../models");

// Get the information from the routes, and parse it
const createProdUser = async (req, res) => {
  const validate = await Users.findOne({
    where: { email: req.body.email },
  });

  if (validate) {
    res.send({ Response: 400, Detail: "Email already taken!" });
    return;
  }

  try {
    await Users.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
    });
  } catch (error) {
    res.send(error);
    return;
  }

  const id = await Users.findAll({
    where: { email: req.body.email },
  });

  res.send({
    RESPONSE: 200,
    DETAIL: "Customer has been successfully created!",
    USER_ID: id[0].dataValues.id,
  });
};

module.exports = createProdUser;
