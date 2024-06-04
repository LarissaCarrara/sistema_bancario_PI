const body = document.querySelector("body"),
  saldo = document.querySelector(".saldo"),
  saldo__reais = document.querySelector(".saldo__reais"),
  destinatario = document.querySelector(".destinatario"),
  destinatario__user = document.querySelector(".destinatario__user");

const { email, id } = JSON.parse(localStorage.getItem("user-safebank"));
const id_pagamento = JSON.parse(localStorage.getItem("dados-pagamento"));
const Saldo = JSON.parse(localStorage.getItem("Saldo"));

function carregar() {
  const { cpf, saldo } = JSON.parse(localStorage.getItem("user-safebank"));
  const { nome } = JSON.parse(localStorage.getItem("dados-pagamento"));

  saldo__reais.innerHTML = `R$ ${Saldo}`;
  destinatario__user.innerHTML = `${nome}`;
}

let codigoEnviadoParaOEmail = "";

const showInputCode = () => {
  const inputCode = document.querySelector("#code-div");
  inputCode.classList.toggle("hidden");
};

async function sendEmailTwoFactorAuth() {
  const pixValor = document.querySelector("#pixValor").value;
  console.log(pixValor,saldo)
  if (pixValor <= saldo && pixValor > 0) {
    showInputCode();
    const urlProd = "https://sistema-bancario-pi.onrender.com/twofactorauth";
    const urlDev = "http://localhost:3000/twofactorauth";

    codigoEnviadoParaOEmail = Math.floor(Math.random() * 10000);

    const optionsDoFetch = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: codigoEnviadoParaOEmail,
        email,
      }),
    };

    const response = await fetch(urlDev, optionsDoFetch).then((response) =>
      response.json()
    );

    console.log(response);

    console.log("Código enviado para o email: ", codigoEnviadoParaOEmail);
  } else {
    alert("Valor inválido");
  }
}

const createTransaction = async (id, pixValor) => {
  const response = await fetch("http://localhost:3000/transaction/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      valor: Number(pixValor),
      clienteId: id,
      descricao: "Pagamento de boleto",
      tipo: "PIX",
    }),
  });

  const data = await response.json();

  return data;
};

const alterarSaldo = async (idQuemEnvia, idQuemRecebe, valor) => {
  const response = await fetch(
    `http://localhost:3000/transaction/alterarSaldo`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idQuemEnvia,
        idQuemRecebe,
        valor,
      }),
    }
  );

  const data = await response.json();

  return data;
};
// CAMACHO MUDA O VALOR DO PIX PARA VALORPIX NO TRASACTION NO LOCALSTORAGE

const confirmCode = async () => {
  const pixValor = document.querySelector("#pixValor").value;
  const code = document.querySelector("#code").value;

  const { id } = JSON.parse(localStorage.getItem("user-safebank"));

  console.log("ENTEROU NA FUNCAO", id_pagamento.id, id, pixValor)

  if (Number(code) === Number(codigoEnviadoParaOEmail)) {
    // alert("Código válido");
    const alterarSaldoResponse = await alterarSaldo(id, id_pagamento.id, pixValor);
    console.log(alterarSaldoResponse)
    const createTransactionResponse = await createTransaction(id,pixValor);
    console.log(createTransactionResponse);

    if (createTransactionResponse && !createTransactionResponse.error) {
      localStorage.setItem("transaction", JSON.stringify(createTransactionResponse));
      alert("Transação realizada com sucesso");
      window.location.href = "../comprovante";


    } else {
      alert("Erro ao realizar transação");
    }
  } else {
    alert("Código inválido");
  }
};
