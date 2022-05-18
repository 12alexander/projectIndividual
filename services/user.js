const bcrypt = require("bcrypt");
const User = require("../models/user");

const loginService = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("password").exec();
  if (!user) {
    return { message: "enter valid data", code: 200 };
  }
  return (await bcrypt.compare(password, user.password))  
    ? { message: user.getToken(), code: 200 }
    : { message: "enter valid data", code: 400 };
};

const registerService = ({ email, password }) =>
  User.create({ email, password });

module.exports = { loginService, registerService };
