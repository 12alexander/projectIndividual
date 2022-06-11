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

async function getAllArtist() {
  return await Artist.find();
}
module.exports = {
  registerService,
  getAllArtist,
  findArtistService,
};
