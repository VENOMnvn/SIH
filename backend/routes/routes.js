const userRegisteration = require("../controllers/userRegisteration")
const userLogin = require("../controllers/userLogin")
const SendOtp = require("../controllers/SendOtp")
const userLogout = require("../controllers/userLogout")
const filterFunction = require("../Controllers/filter");

const express = require('express');
const router = express.Router();

router.post('/register', userRegisteration)
router.post('/login', userLogin)
router.post('/send-otp', SendOtp)
router.get('/logout', userLogout);
router.get('/filter',filterFunction);

module.exports = router;