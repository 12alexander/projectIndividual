const mongoose = require("mongoose");

const Package = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    price: {
      type: mongoose.Decimal128,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Package", Package);
