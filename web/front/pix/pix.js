// const { url } = require("inspector");

const saldo__valor = document.querySelector(".saldo__reais");
const input = document.querySelector(".pix__dinheiro");

const cpfPix = document.querySelector("#cpfPix");

function fazerPix() {
  const cpf_pagamento = cpfPix.value;
  console.log("cpf_pagamento:", cpf_pagamento);
  //const { cpf } = JSON.parse(localStorage.getItem("user-safebank"));
  console.log("cpf: ", cpf);
  const urlProd =
    "https://sistema-bancario-pi.onrender.com/listardados/" + cpf_pagamento;
  // console.log(urlProd)
  fetch(urlProd)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.erro != "Cliente não encontrado") {
        console.log("CPF válido");
        localStorage.setItem("dados-pagamento", JSON.stringify(data));
        window.location.href = "./pagamento";
      } else {
        console.log("CPF inválido");
      }
    })
    .catch((error) => console.error("Erro:", error));
}

document.addEventListener("DOMContentLoaded", (event) => {
  const pagarScreen = document.querySelector(".pix__pagar");
  const receberScreen = document.querySelector(".pix__receber");

  pagarScreen.style.cursor = "pointer";
  pagarScreen.addEventListener("click", () => {
    window.location.href = "./pagar.html";
  });

  receberScreen.style.cursor = "pointer";
  receberScreen.addEventListener("click", () => {
    window.location.href = "./receber.html";
  });
});

function ocultar() {
  saldo__valor.classList.toggle("sumir");
}

function resizeInput(input) {
  const minWidth = 70; // Minimum width in pixels
  const characterWidth = 10; // Approximate width of a character in pixels

  // Calculate the new width based on input length
  const newWidth = minWidth + input.value.length * characterWidth;
  input.style.width = newWidth + "px";
}
