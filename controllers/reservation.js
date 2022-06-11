const {
  registerService,
  findHourService,
  getAllReservation,
} = require("../services/reservation");

const { sendEmail } = require("../utils/email");

const register = async (req, res) => {
  try {
    const reservation = await registerService(req.body);
    sendEmail(req.body);
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

async function getReservation(req, res) {
  const reservationtRequest = await getAllReservation();
  res.status(200).send({ value: reservationtRequest });
}

async function findHour(req, res) {
  const hours = await findHourService(req.body);
  console.log("controlador --------");
  console.log(hours);
  res.status(200).send({ value: hours });
}

module.exports = { register, getReservation, findHour };
