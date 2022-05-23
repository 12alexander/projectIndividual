const mongoose = require("mongoose");

const Artist = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      default:
        "https://res.cloudinary.com/dmorxcs1y/image/upload/v1649306884/166246_zzulcy.png",
    },
    services: {
      type: String,
      enum: [
        "Corte de Cabello",
        "Arreglo de Barba",
        "Corte de Cabello y Arreglo de Barba",
        "Diseños",
      ],
      default: "Corte de Cabello",
    },
    schedules: [
      {
        day: {
          type: String,
        },
        schedule: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Artist", Artist);
