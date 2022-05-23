const Package = require("../models/package");

const registerService = ({ title, description, price }) =>
  Package.create({ title, description, price });

async function findPackage(field, value) {
  try {
    const query = { [field]: value };
    return await Package.find(query);
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function getAllPackage() {
  return await Package.find();
}
module.exports = { registerService, getAllPackage, findPackage };
