const {
  register,
  getArtists,
  findArtist,
  update,
} = require("../controllers/artist");

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
api.get("/getData", isAuthenticated, getArtists);
api.post("/update", isAuthenticated, update);
//api.delete("/remove", remove);
api.post("/find", isAuthenticated, findArtist);

module.exports = api;
