const express = require("express");
const router = express.Router();

const {
  uploadPhoto,
  getPhotoByUser,
} = require("../controllers/photoController");

router.post("/upload/:userId", uploadPhoto);
router.get("/:userId", getPhotoByUser);

module.exports = router;
