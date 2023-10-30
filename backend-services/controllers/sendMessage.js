"use strict";
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

// Get the information from the routes, and parse it
const sendMessage = async (req, res) => {
  const phone = req.body.phone;
  const message = req.body.message;

  client.messages
    .create({
      body: message,
      from: "+18556916059",
      to: `+1${phone}`,
    })
    .then((message) => res.send(message))
    .catch((e) => console.log(e));
};

module.exports = sendMessage;
