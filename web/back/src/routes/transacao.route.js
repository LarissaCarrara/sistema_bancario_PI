const express = require("express");
const router = express.Router();

const { createTransaction,getTransactionById,alterarSaldo,getAllTransactions } = require("../controllers/transacao.controller");

router.post("/transaction/create", createTransaction);
router.get("/transaction/:id", getTransactionById);
router.put("/transaction/alterarSaldo", alterarSaldo);
router.get("/transaction", getAllTransactions);


module.exports = router;
