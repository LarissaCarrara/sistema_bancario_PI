const body = document.querySelector("body"),
  saldo = document.querySelector(".saldo"),
  saldo__reais = document.querySelector(".saldo__reais"),
  destinatario = document.querySelector(".destinatario"),
  destinatario__user = document.querySelector(".destinatario__user");

function carregar() {
  const { cpf, saldo } = JSON.parse(localStorage.getItem("user-safebank"));
  const { nome } = JSON.parse(localStorage.getItem("dados-pagamento"));

  saldo__reais.innerHTML = `R$ ${saldo}`;
  destinatario__user.innerHTML = `${nome}`;
}


let codigoEnviadoParaOEmail = "";

const showInputCode = () => {
    const inputCode = document.querySelector("#code-div");
    inputCode.classList.toggle("hidden");
    
}

async function sendEmailTwoFactorAuth() {

    showInputCode()
  const { email } = JSON.parse(localStorage.getItem("user-safebank"));
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
}

const createTransaction = async (id) => {

    const response = await fetch("http://localhost:3000/transaction/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            valor: 100,
            clienteId: id,
            descricao: "Pagamento de boleto",
            tipo: "PIX",
        }),
    })

    const data = await response.json();

    return data;
}

const confirmCode = () => {
    const code = document.querySelector("#code").value;
    const { email,id } = JSON.parse(localStorage.getItem("user-safebank"));
  
    if (code == codigoEnviadoParaOEmail) {
      alert("Código válido");
        
      const createTransactionResponse = createTransaction(id);

      console.log(createTransactionResponse)

        if (createTransactionResponse
            && !createTransactionResponse.error) {
            alert("Transação realizada com sucesso");
            window.location.href = "/comprovante?id="+createTransactionResponse.id
        } else {
            alert("Erro ao realizar transação");
        }
    } else {
      alert("Código inválido");
    }
       
}