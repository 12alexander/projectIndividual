const express = require("express");
const cors = require("cors");
const User = require("./routes/user");
const Package = require("./routes/package");
const Artist = require("./routes/artist");
const Reservation = require("./routes/reservation");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", User);
app.use("/api/package", Package);
app.use("/api/artist", Artist);
app.use("/api/reservation", Reservation);

module.exports = app;
