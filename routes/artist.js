const {
  register,
  getArtists,
  findArtist,
  update,
  remove,
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

api.post("/create", upload.any("images"), register);
api.get("/getData", getArtists);
api.post("/update", isAuthenticated, update);
api.post("/remove", remove);
api.post("/find", isAuthenticated, findArtist);

module.exports = api;
