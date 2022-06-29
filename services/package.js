const Package = require("../models/package");

const registerService = ({ title, description, price, images }) =>
  Package.create({ title, description, price, images });

async function removePackageService(id) {
  return await Package.deleteOne({ _id: id });
}

async function getAllPackagesService() {
  return await Package.find();
}
module.exports = {
  registerService,
  getAllPackagesService,
  removePackageService,
};
