const {
  register,
  getPackages,
  update,
  remove,
} = require("../controllers/package.js");
const isAuthenticated = require("../middleware/auth");

const api = require("express").Router();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

api.post("/create", isAuthenticated, upload.any("images"), register);
api.get("/getData", getPackages);
api.post("/update", update);
api.post("/remove", remove);

module.exports = api;
