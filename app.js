//External import
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const http = require("http");
const path = require("path");
const cookieParser = require("cookie-parser");
const loginRouter = require("./Routers/loginRouter");
const userRouter = require("./Routers/usersRouter");
const inboxRouter = require("./Routers/inboxRouter");

//Internal import
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorhandler.js");
const ecorateHtmlResponse = require("./middlewares/decorateHtmlResponse");

const app = express();
const server = http.createServer(app);
dotenv.config();

//database connection
const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with database is successfull.");
  } catch (error) {
    console.log(error);
  }
};
db();

//request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup
app.use("/", loginRouter);
app.use("/users", userRouter);
app.use("/inbox", inboxRouter);

//404 not found handler
app.use(notFoundHandler);

//common(default) error handler
app.use(errorHandler);

//server initializing
server.listen(process.env.PORT, () => {
  console.log(`app is listening to ${process.env.PORT}`);
});
