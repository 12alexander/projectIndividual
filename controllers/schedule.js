const {
  registerService,
  getAllScheduleService,
} = require("../services/schedule");
const fs = require("fs");

const register = async (req, res) => {
  try {
    const scheduleRequest = await registerService(req.body);
    return res.status(200).send({
      message: "Successfully registered Schedule",
      data: scheduleRequest,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "failed register", errors: error.message });
  }
};

async function getAllSchedule(req, res) {
  const scheduleRequest = await getAllScheduleService();
  res.status(200).send({ value: scheduleRequest });
}

module.exports = { register, getAllSchedule };
