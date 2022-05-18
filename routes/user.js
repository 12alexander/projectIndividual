const { login, register } = require("../controllers/user.js");
const api = require("express").Router();

api.post("/login", login);
api.post("/register", register);

module.exports = api;
