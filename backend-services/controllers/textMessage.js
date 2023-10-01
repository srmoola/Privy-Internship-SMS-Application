"use strict";
// Remember to destructure using the model name found in the model file
const { textMessage } = require("../models");

// Get the information from the routes, and parse it
const createTextMessage = async (req, res) => {
  const dateObject = new Date();

  const formattedDate = `${dateObject.getDate()}/${
    dateObject.getMonth() + 1 //months are zero-based
  }/${dateObject.getFullYear()}`;

  await textMessage.create({
    message: req.body.message,
    dateSent: formattedDate,
  });

  res.send({ ...req.body });
};

module.exports = createTextMessage;
