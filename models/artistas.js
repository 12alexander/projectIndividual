const mongoose = require("mongoose");

const Artistas = mongoose.Schema(
  {
    nombre: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      default:
        "https://res.cloudinary.com/dmorxcs1y/image/upload/v1649306884/166246_zzulcy.png",
    },
    servicios: {
      type: String,
      enum: [
        "Corte de Cabello",
        "Arreglo de Barba",
        "Corte de Cabello y Arreglo de Barba",
        "Diseños",
      ],
      default: "Corte de Cabello",
    },
    horario: [
      {
        dia: {
          type: String,
        },
        horario: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Artistas", Artistas);
