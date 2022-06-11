const Reservation = require("../models/reservation");

const registerService = ({ user, idPackage, idArtist, day, time }) =>
  Reservation.create({ user, idPackage, idArtist, day, time });

async function getAllReservation() {
  return await Reservation.find();
}

async function findHourService({ dataPackage, dataArtist, day }) {
  console.log("llego a servicioo");
  console.log(dataPackage, dataArtist, day);
  return await Reservation.find({
    idPackage: dataPackage,
    idArtist: dataArtist,
    day: day,
  });
}
module.exports = {
  registerService,
  getAllReservation,
  findHourService,
};
