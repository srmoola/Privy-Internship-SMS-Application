const express = require("express");

const app = express();
require("dotenv").config();
app.use(express.json());
var cors = require("cors");
var corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOptions));
// app.use(cors(corsOptions));
const PORT = 3000;

const testRoute = require("./routes/test");
const createCustomerMessageRoute = require("./routes/testUsers");
const createCustomerRoute = require("./routes/customers");
const createTextMessageRoute = require("./routes/textMessage");
const createProdUserRoute = require("./routes/prodUsers");
const getCustomerListRoute = require("./routes/getCustomerList");
const checkUserRoute = require("./routes/checkUser");
const sendMessageRoute = require("./routes/sendMessage");

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
app.use("/create-prod-user", createProdUserRoute);
app.use("/get-customer-list", getCustomerListRoute);
app.use("/check-user", checkUserRoute);
app.use("/send-message", sendMessageRoute);

app.listen(PORT, (error) => {
  if (!error) console.log("http://localhost:" + PORT);
  else console.log("Error occurred, server can't start", error);
});
