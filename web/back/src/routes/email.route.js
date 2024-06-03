const express = require("express");
const router = express.Router();

const { twoFactorAuth } = require("../controllers/email.controller");

router.post("/twofactorauth", twoFactorAuth);

module.exports = router;
