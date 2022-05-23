const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserShema = mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
      minLength: 6,
    },
    password: {
      type: String,
      require: true,
      minLength: 4,
    },
    tipe: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    img: {
      type: String,
      default:
        "https://res.cloudinary.com/dmorxcs1y/image/upload/v1649306884/166246_zzulcy.png",
    },
  },
  {
    timestamps: true,
  }
);

UserShema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserShema.post("save", function (error, doc, next) {
  next(error.code === 11000 ? new Error("The email is alreade in use") : error);
});

UserShema.methods.getToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_KEY_SECRET, {
    expiresIn: process.env.JWT_eXPIRE,
  });
};

module.exports = mongoose.model("User", UserShema);
