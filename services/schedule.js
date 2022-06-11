const Schedule = require("../models/schedule");

const registerService = ({ day, hour, barber }) =>
  Schedule.create({ day, hour, barber });

async function getAllScheduleService() {
  return await Schedule.find();
}
module.exports = {
  registerService,
  getAllScheduleService,
};
