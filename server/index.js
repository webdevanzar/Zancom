const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDb = require("./config/db");
require("dotenv").config();

const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const storyRoute = require("./routes/story");
const commentRoute = require("./routes/comment");
const messageRoute = require("./routes/message");
const notificationRoute = require("./routes/notification");

connectDb();
app.use(cors());

app.use(cookieParser());
app.use(express.json());

app.use("/api/users", userRoute);
// app.use("/api/posts", postRoute);
// app.use("/api/stories", storyRoute);
// app.use("/api/comments", commentRoute);
// app.use("/api/messages", messageRoute);
// app.use("/api/notification", notificationRoute);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
