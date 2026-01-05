const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema(
  {
    base64Image: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Photo", photoSchema);
