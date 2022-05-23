const {
  register,
  getArtists,
  findArtist,
  update,
} = require("../controllers/artist");

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
api.post("/getData", getArtists);
api.post("/update", update);
//api.post("/remove", remove);
api.post("/find", findArtist);

module.exports = api;
