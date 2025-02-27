const mongoose = require("mongoose");

const storySchema = new mongoose.Schema(
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
    views: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        viewedAt: {
          type: Date,
          default: Date.now, // Timestamp when the user viewed the story
        },
      },
    ],
    reactions: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User", //track who reacted
        },
        emoji: {
          type: String, // Store reaction emoji (🔥❤️😂, etc.)
          enum: ["🔥", "❤️", "😂", "😮", "😢", "👍"], // Limit allowed reactions
        },
        reactedAt: {
          type: Date,
          default: Date.now, // Timestamp when the reaction was added
        },
      },
    ],
    isHighlight: {
      type: Boolean,
      default: false,
    },
    expiresAt: {
      type: Date, // Auto-delete after 24 hours unless it's a highlight
      required: true,
      default: () => new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from creation
    },
  },
  {
    timestamps: true,
  }
);

// Auto-delete only if not a highlight
storySchema.index(
  { expiresAt: 1 },
  { expireAfterSeconds: 0, partialFilterExpression: { isHighlight: false } }
);

module.exports = mongoose.model("Story", storySchema);
