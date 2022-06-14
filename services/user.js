const bcrypt = require("bcrypt");
const User = require("../models/user");

const loginService = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("password").exec();
  const type = await User.findOne({ email }).select("tipe").exec();
  if (!user) {
    return { message: "enter valid data", code: 200 };
  }
  return (await bcrypt.compare(password, user.password))
    ? { message: user.getToken(), code: 200, type: type.tipe }
    : { message: "enter valid data", code: 400 };
};

const registerService = ({ email, password }) =>
  User.create({ email, password });

module.exports = { loginService, registerService };
