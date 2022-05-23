const {
  registerService,
  updateService,
  getAllArtist,
  findArtist,
} = require("/models");

const Artist = require("../models/artists");

const registerService = ({ nombre, img, servicios, horario }) =>
  Artist.create({ nombre, img, servicios, horario });

async function findArtist(field, value) {
  try {
    const query = { [field]: value };
    return await Artist.find(query);
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function getAllArtist() {
  return await Artist.find();
}
module.exports = { registerService, updateService, getAllArtist, findArtist };
