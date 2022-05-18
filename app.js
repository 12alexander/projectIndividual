const express = require("express");
const User = require("./routes/user");
const app = express();

app.use(express.json());

app.use("/api/user", User);

module.exports = app;
