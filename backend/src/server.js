require("dotenv").config();

const { appConfig } = require("./config/app.config");

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const photoRoutes = require("./routes/photoRoutes");

const app = express();

const ALLOWED_CORS = appConfig.allowedCors;
const PORT = appConfig.port;

app.use(
  cors({
    origin: ALLOWED_CORS,
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));

connectDB();

const prefix = "/api/v1/image-gallery";

app.use(`${prefix}/auth`, authRoutes);
app.use(`${prefix}/photo`, photoRoutes);

app.listen(PORT, () => {
  console.log(
    "Servidor iniciado correctamente:",
    `http://localhost:${PORT}${prefix}`,
    ALLOWED_CORS
  );
});
