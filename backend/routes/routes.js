const {userRegisteration} = require("../controllers/userRegisteration")
const userLogin = require("../controllers/userLogin")
const SendOtp = require("../controllers/SendOtp")
const userLogout = require("../controllers/userLogout")
const filterFunction = require("../Controllers/filter");
const {proffesionalData} = require('../Controllers/userRegisteration');
const {profileComplete} = require('../Controllers/userRegisteration');


const express = require('express');
const router = express.Router();

router.post('/register', userRegisteration)
router.post('/login', userLogin)
router.post('/send-otp', SendOtp)
router.get('/logout', userLogout);
router.get('/filter',filterFunction);
router.post('/proffesionalData',proffesionalData);
router.post('/profileComplete',profileComplete);

module.exports = router;