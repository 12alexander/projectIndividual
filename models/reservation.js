const mongoose = require("mongoose");

const Reservation = mongoose.Schema(
  {
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
      require: true,
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

module.exports = model("Reservation", Reservation);
