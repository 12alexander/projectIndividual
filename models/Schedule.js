const mongoose = require("mongoose");

const Schedule = mongoose.Schema(
  {
    day: {
      type: String,
      require: true,
    },
    hour: {
      type: String,
      require: true,
    },
    Barber: [],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Schedule", Schedule);
