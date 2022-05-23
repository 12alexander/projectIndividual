const {
  registerService,
  updateService,
  getAllReservation,
  findReservation,
} = require("../services/reservation");

const register = async (req, res) => {
  try {
    const reservation = await registerService(req.body);
    return res.status(200).send({
      message: "Successfully registered Reservation",
      data: reservation,
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ message: "failed Reservation", errors: error.message });
  }
};

const update = async (req, res) => {
  try {
    const reservation = await updateService(req.body);
    return res
      .status(200)
      .send({ message: "Successfully update Reservation", data: reservation });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ message: "failed update Reservation", errors: error.message });
  }
};

async function getReservation(req, res) {
  const reservationtRequest = await getAllReservation();
  res.status(200).send({ value: reservationtRequest });
}

async function findReservation(req, res) {
  try {
    const { id } = req.data;
    const reservationRequest = await findReservation(id);
    res.status(201).send({ message: "found tour", value: reservationRequest });
  } catch (err) {
    res.status(400).send({
      message: `tour not found. ${err}`,
    });
  }
}

module.exports = { register, getReservation, findReservation, update };
