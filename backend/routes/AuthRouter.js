const express = require("express");
const { signup, login } = require("../controller/AuthController");
const { signupValidation, loginValidation } = require("../middleware/AuthValidation");

const router = express.Router();

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);

module.exports = router;
