const express = require("express");
const router = express.Router();

const { createTransaction,getTransactionById,alterarSaldo } = require("../controllers/transacao.controller");

router.post("/transaction/create", createTransaction);
router.get("/transaction/:id", getTransactionById);
router.put("/transaction/alterarSaldo", alterarSaldo);

module.exports = router;
