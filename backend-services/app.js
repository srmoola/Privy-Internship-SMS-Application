const express = require("express");

const app = express();
app.use(express.json());
const PORT = 3000;

const testRoute = require("./routes/test");
const createCustomerMessageRoute = require("./routes/testUsers");
const createCustomerRoute = require("./routes/customers");
const createTextMessageRoute = require("./routes/textMessage");

app.get("/", (req, res) =>
  res.send(
    "Server is Successfully Running, and App is listening on port " + PORT
  )
);

// Using routes in other files
app.use("/test", testRoute);
app.use("/create-customer-message", createCustomerMessageRoute);
app.use("/create-text-message", createTextMessageRoute);
app.use("/create-customer", createCustomerRoute);

app.listen(PORT, (error) => {
  if (!error) console.log("http://localhost:" + PORT);
  else console.log("Error occurred, server can't start", error);
});
