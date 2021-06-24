//external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const avatarUpload = require("../middlewares/users/avatarUpload");

//Internal imports
const {
  getUsers,
  addUser,
  removeUser,
} = require("../controllers/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {
  addUserValidators,
  addValidationHandler,
} = require("../middlewares/users/userVAlidation");

const router = express.Router();

//Users page
router.get("/", decorateHtmlResponse("Users"), getUsers);

//add User
router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addValidationHandler,
  addUser
);

//delete user
router.delete("/:id", removeUser);

module.exports = router;
