const express = require("express");
const router = express.Router();

const bank = require('../controllers/bank.controller');

router.post("/login", bank.login)
 router.get('/listardados/:cpf', bank.listardados);

module.exports = router