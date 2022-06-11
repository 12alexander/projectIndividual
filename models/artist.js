const mongoose = require("mongoose");

const Artist = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    images: {
      type: String,
      default:
        "https://res.cloudinary.com/dmorxcs1y/image/upload/v1649306884/166246_zzulcy.png",
    },
    services: [],
    schedules: [
      {
        day: {
          type: String,
        },
        schedule: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Artist", Artist);
