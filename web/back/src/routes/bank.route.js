const express = require("express");
const router = express.Router();

const bank = require('../controllers/bank.controller');


 router.post('/login', bank.login);
 router.get('/listardados', bank.listardados);
 router.get('/listar/:categoriaid', bank.filtrar);
 router.get('/listar/cardapio/:categoriaid', bank.listarCardapio);
 router.get('/categoria', bank.categoria);
 
// router.put('/update', bank.alterar);
// router.delete('/del/:id', bank.excluir);

module.exports = router