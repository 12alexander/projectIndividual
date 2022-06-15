const { loginService, registerService } = require("../services/user");

const login = async (req, res) => {
  try {
    const { message, code, type } = await loginService(req.body);
    return res.status(code).send({ message, type });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ message: "incorrect information", errors: error.message });
  }
};

const register = async (req, res) => {
  try {
    const user = await registerService(req.body);
    return res
      .status(200)
      .send({ message: "Successfully registered user", data: user });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "sign up failed", errors: error.message });
  }
};

module.exports = { login, register };
