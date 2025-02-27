const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // The user who receives the notification
      required: true,
    },
    type: {
      type: String,
      enum: ["like", "comment", "follow", "mention", "message"],
      required: true,
    },
    data: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false, // By default, notifications are unread
    },
  },
  {
    timestamps: true,
  }
);

// Index for fast retrieval of unread notifications
notificationSchema.index({ userId: 1, isRead: 1 });

notificationSchema.index(
  { createdAt: 1 },
  { expireAfterSeconds: 7 * 24 * 60 * 60 }
); // Deletes after 7 days

module.exports = mongoose.model("Notification", notificationSchema);
