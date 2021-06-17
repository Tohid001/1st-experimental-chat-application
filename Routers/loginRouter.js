//external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

//Internal imports
const { getLogin } = require("../controllers/loginController");
const decorateHtmlResponse = require("../middlewares/decorateHtmlResponse");

const router = express.Router();

//login page
router.get("/", decorateHtmlResponse("Login"), getLogin);

module.exports = router;
