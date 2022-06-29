const cloudinary = require("cloudinary").v2;
const {
  registerService,
  getAllPackagesService,
  removePackageService,
} = require("../services/package");
const fs = require("fs");

cloudinary.config({
  cloud_name: "dmorxcs1y",
  api_key: "872881161811572",
  api_secret: "kDnGezb0yopoQZ3SAyWObnQjBIA",
});

const register = async (req, res) => {
  try {
    const { files } = req;
    let arrayImg = [];

    if (files) {
      arrayImg = await pushImages(files);
    }

    const packages = {
      ...req.body,
      images: arrayImg,
    };

    const packageRequest = await registerService(packages);
    return res.status(200).send({
      message: "Successfully registered package",
      data: packageRequest,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "failed register", errors: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { files } = req;
    let arrayImg = [];

    if (files) {
      arrayImg = await pushImages(files);
    }

    const packages = {
      ...req.body,
      images: arrayImg,
    };

    const packageRequest = await updateService(packages);
    return res.status(200).send({
      message: "Successfully Update package",
      data: packageRequest,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "failed Update", errors: error.message });
  }
};

async function getPackages(req, res) {
  const packageRequest = await getAllPackagesService();
  res.status(200).send({ value: packageRequest });
}

async function remove(req, res) {
  try {
    const { id } = req.body;
    await removePackageService(id);
    res.status(200).send({ message: "Delete Package Sucess" });
  } catch (err) {
    res.status(400).send({
      message: `incomplete remove. ${err}`,
    });
  }
}

const pushImages = async (files) => {
  const arrayImages = new Array();
  for (const el of files) {
    try {
      const { url } = await cloudinary.uploader.upload(el.path);
      arrayImages.push(url);
    } catch (err) {
      console.log(err);
    } finally {
      fs.unlinkSync(el.path);
    }
  }
  return arrayImages;
};

module.exports = { register, getPackages, update, remove };
