const Artist = require("../models/artist");

const registerService = ({ name, images, services, schedules }) =>
  Artist.create({ name, images, services, schedules });

async function findArtistService(field, value) {
  try {
    const query = { [field]: value };
    return await Artist.find(query);
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function removeArtistService(id) {
  console.log("mi id es el que se muestra servicio");
  console.log(id);
  return await Artist.deleteOne({ _id: id });
}

async function getAllArtist() {
  return await Artist.find();
}
module.exports = {
  registerService,
  getAllArtist,
  findArtistService,
  removeArtistService,
};
