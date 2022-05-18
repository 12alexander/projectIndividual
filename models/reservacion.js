const mongoose = require("mongoose");

const Reservacion = mongoose.Schema(
  {
    idPaquete: {
      type: String,
      require: true,
    },
    idArtista: {
      type: String,
      require: true,
    },
    dia: {
      type: String,
      require: true,
    },
    hora: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Reservacion", Reservacion);
