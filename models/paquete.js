const mongoose = require("mongoose");

const Paquete = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    descripcion: {
      type: String,
    },
    precio: {
      type: mongoose.Decimal128,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Paquete", Paquete);
