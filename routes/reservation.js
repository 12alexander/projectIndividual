const {
  register,
  getReservation,
  findHour,
} = require("../controllers/reservation");

const isAuthenticated = require("../middleware/auth");

const api = require("express").Router();

api.post("/", register);
api.post("/findHour", findHour);
api.get("/getData", isAuthenticated, getReservation);
//api.delete("/remove", remove);
//api.post("/find", isAuthenticated, findReservation);

module.exports = api;
