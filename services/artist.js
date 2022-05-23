const Artist = require("../models/artists");

const registerService = ({ name, img, services, schedules }) =>
  Artist.create({ name, img, services, schedules });

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
