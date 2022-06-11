const Package = require("../models/package");

const registerService = ({ title, description, price, images }) =>
  Package.create({ title, description, price, images });

async function findPackage(field, value) {
  try {
    const query = { [field]: value };
    return await Package.find(query);
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function getAllPackagesService() {
  return await Package.find();
}
module.exports = { registerService, getAllPackagesService, findPackage };
