const {
  register,
  getReservation,
  findReservation,
  update,
} = require("../controllers/reservation");

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
api.get("/getData", getReservation);
api.post("/update", update);
//api.delete("/remove", remove);
api.post("/find", findReservation);

module.exports = api;
