const express = require("express");
const router = express.Router();

const { createTransaction,getTransactionById } = require("../controllers/transacao.controller");

router.post("/transaction/create", createTransaction);
router.get("/transaction/:id", getTransactionById);

module.exports = router;
