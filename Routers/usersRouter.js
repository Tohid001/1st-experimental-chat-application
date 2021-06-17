//external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

//Internal imports
const { getUsers } = require("../controllers/usersController");
const decorateHtmlResponse = require("../middlewares/decorateHtmlResponse");

const router = express.Router();

//login page
router.get("/", getUsers);

module.exports = router;
