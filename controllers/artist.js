const cloudinary = require("cloudinary").v2;
const {
  registerService,
  getAllArtist,
  findArtistService,
} = require("../services/artist");
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

    const artists = {
      ...req.body,
      images: arrayImg[0],
    };
    console.log("---------------");
    console.log(artists);
    console.log("---------------");
    const artistRequest = await registerService(artists);
    return res.status(200).send({
      message: "Successfully registered artist",
      data: artistRequest,
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

    const artists = {
      ...req.body,
      images: arrayImg,
    };

    const artistRequest = await updateService(artists);
    return res.status(200).send({
      message: "Successfully Update artist",
      data: artistRequest,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "failed Update", errors: error.message });
  }
};

async function getArtists(req, res) {
  const artistRequest = await getAllArtist();
  res.status(200).send({ value: artistRequest });
}

async function findArtist(req, res) {
  try {
    const { id } = req.data;
    const artistRequest = await findArtist(id);
    res.status(201).send({ message: "found tour", value: artistRequest });
  } catch (err) {
    res.status(400).send({
      message: `tour not found. ${err}`,
    });
  }
}

const pushImages = async (files) => {
  const arrayImages = new Array();
  for (const el of files) {
    try {
      const { url } = await cloudinary.uploader.upload(el.path);
      console.log("*******************");
      console.log(url);
      arrayImages.push(url);
    } catch (err) {
      console.log(err);
    } finally {
      fs.unlinkSync(el.path);
    }
  }
  return arrayImages;
};

module.exports = { register, getArtists, findArtist, update };
