const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema(
  {
    imageBase64: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Photo", photoSchema);
