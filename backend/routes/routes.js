const Registeration = require("../controllers/Registeration")
const Login = require("../controllers/Login")
const SendOtp = require("../controllers/SendOtp")

const express = require('express');
const router = express.Router();

// route.get('/workerregisteration', (req, res) => { res.render('worker_registeration') });
router.post('/register', Registeration)
router.post('/login', Login)
router.post('/send-otp', SendOtp)

module.exports = router;