const mongoose = require("mongoose");
const Reservation = mongoose.Schema(
  {
    user: {
      type: String,
      require: true,
    },
    idPackage: {
      type: String,
      require: true,
    },
    idArtist: {
      type: String,
      require: true,
    },
    day: {
      type: String,
    },
    time: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Reservation", Reservation);
