const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["post", "reel"], // Distinguish between post (image) & reel (video)
      required: true,
    },
    caption: {
      type: String,
      trim: true,
      default: "",
    },
    media: {
      url: {
        type: String,
        required: true,
        default: "",
      },
      publicId: {
        type: String,
        required: true,
        default: "",
      },
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
