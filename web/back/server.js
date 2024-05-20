//config padrao
const express = require("express");
const cors = require("cors"); //segurança do back

const Router_Bank = require("./src/routes/bank.route");
const app = express();

app.use(cors());
app.use(express.json());

app.use(Router_Bank);

app.listen(3000, ()=>{
    console.log("rodando");
})