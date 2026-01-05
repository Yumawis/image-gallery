const Photo = require("../models/Photo");
const User = require("../models/User");

const uploadPhoto = async (req, res) => {
  try {
    const { userId } = req.params;
    const { base64Image } = req.body;

    const userExists = await User.exists({ _id: userId });

    if (!userExists) {
      return res.status(400).json({
        data: { message: "El usuario no existe" },
      });
    }

    if (!base64Image) {
      return res.status(400).json({
        data: { message: "La variable base64Image es requerida" },
      });
    }

    const newPhoto = new Photo({ base64Image, userId });

    const savedPhoto = await newPhoto.save();

    const response = {
      data: {
        message: "Foto subida correctamente",
        result: savedPhoto,
      },
    };

    return res.status(200).json(response);
  } catch (error) {
    const errorMessage = error.message;

    const response = {
      data: {
        message: "Ocurrió un error subiendo la foto",
        error: errorMessage,
      },
    };

    return res.status(420).json(response);
  }
};

const getPhotoByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const photos = await Photo.find({ userId }).select("-userId -_id");

    const response = {
      data: {
        message: "Fotos obtenidas correctamente",
        result: photos,
      },
    };

    return res.status(200).json(response);
  } catch (error) {
    const errorMessage = error.message;

    const response = {
      data: {
        message: "Ocurrió un error al obtener las imágenes",
        error: errorMessage,
      },
    };

    return res.status(420).json(response);
  }
};

module.exports = { uploadPhoto, getPhotoByUser };
