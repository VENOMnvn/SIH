const { userRegisteration } = require("../Controllers/userRegisteration");
const userLogin = require("../Controllers/userLogin");
const SendOtp = require("../Controllers/SendOtp");
const userLogout = require("../Controllers/userLogout");
const filterFunction = require("../Controllers/filter");
const { proffesionalData } = require("../Controllers/userRegisteration");
const { profileComplete } = require("../Controllers/userRegisteration");
const { addExperience } = require("../Controllers/userRegisteration");
const { addDetails } = require("../Controllers/userRegisteration");
const { uploadDocs } = require("../Controllers/userRegisteration");

const { upload } = require("../middleware/multerConfig");

const express = require("express");
const router = express.Router();

router.post("/register", userRegisteration);
router.post("/login", userLogin);
router.post("/send-otp", SendOtp);
router.get("/logout", userLogout);
router.get("/filter", filterFunction);



router.post("/addDetails", addDetails);

router.post(
  "/uploadDocs",
  upload.fields([
    { name: "adharImage", maxCount: 1 },
    { name: "panImage", maxCount: 1 },
    { name: "licenseImage", maxCount: 1 },
    { name: "educationalCertificate", maxCount: 1 },
  ]),
  uploadDocs
);
router.post("/addExperience", addExperience);


router.post("/profileComplete", profileComplete);

module.exports = router;
