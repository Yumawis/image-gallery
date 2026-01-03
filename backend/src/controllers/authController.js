const User = require("../models/User");

const signUp = async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        data: { message: "El email ya se encuentra registrado" },
      });
    }

    const newUser = new User({ email });

    const savedUser = await newUser.save();
    const currentUser = { id: savedUser._id };

    const response = {
      data: {
        message: "Usuario creado correctamente",
        result: currentUser,
      },
    };

    return res.status(200).json(response);
  } catch (error) {
    const errorMessage = error.message;

    const response = {
      data: {
        message: "Ocurrió un error creando el usuario",
        error: errorMessage,
      },
    };

    return res.status(420).json(response);
  }
};

const login = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        data: {
          message: "Usuario no encontrado",
        },
      });
    }

    const response = {
      data: {
        message: "Inicio de sesión exitoso",
        result: { id: user._id, email: user.email },
      },
    };

    return res.status(200).json(response);
  } catch (error) {
    const errorMessage = error.message;

    const response = {
      data: {
        message: "Ocurrió un error al iniciar sesión",
        error: errorMessage,
      },
    };

    return res.status(420).json(response);
  }
};

module.exports = { signUp, login };
