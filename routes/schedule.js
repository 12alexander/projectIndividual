const { register, getAllSchedule } = require("../controllers/schedule");

const isAuthenticated = require("../middleware/auth");

const api = require("express").Router();

api.post("/create", register);
api.get("/getData", getAllSchedule);
//api.post("/update", update);

module.exports = api;
