const Reservation = require("../models/reservation");

const registerService = ({ name, img, services, schedules }) =>
  Reservation.create({ name, img, services, schedules });

async function findReservation(field, value) {
  try {
    const query = { [field]: value };
    return await Reservation.find(query);
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function getAllReservation() {
  return await Reservation.find();
}
module.exports = {
  registerService,
  getAllReservation,
  findReservation,
};
