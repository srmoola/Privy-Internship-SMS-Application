"use strict";
const { Customer } = require("../models");

const getCustomerByEmail = async (req, res) => {
  if (typeof req.body.user_id != "number") {
    res.send({ ERROR: 300, DETAIL: "Please send a number" });
    return;
  }

  Customer.findAll({
    where: {
      user_id: req.body.user_id,
    },
  })
    .then((response) => {
      // check if no customers found
      if (response.length === 0) {
        res.send({
          RESPONSE: 300,
          DETAIL: "No Customers under this user were found!",
        });
        return;
      }

      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = getCustomerByEmail;
