//config padrao
const express = require("express");
const cors = require("cors"); //segurança do back

const Router_Bank = require("./src/routes/bank.route");
const Router_Email = require("./src/routes/email.route");
const Router_Transaction = require("./src/routes/email.route");
const app = express();

app.use(cors());
app.use(express.json());

app.use(Router_Bank);
app.use(Router_Email);
app.use(Router_Transaction);

app.listen(3000, async ()=>{
    console.log("rodando");
})