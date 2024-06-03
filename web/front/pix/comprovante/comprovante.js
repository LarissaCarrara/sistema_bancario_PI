const pagador = document.querySelector("#pagador");
const recebido = document.querySelector("#recebido");
const dataElem = document.querySelector("#data");
const valor = document.querySelector("#valor");

const { nome } = JSON.parse(localStorage.getItem("user-safebank"));
const nome_pagador = JSON.parse(localStorage.getItem("dados-pagamento"));

const dataAtual = new Date();

const dataFormatada = dataAtual.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
});

recebido.innerHTML = nome_pagador.nome;
pagador.innerHTML = `${nome}`;
dataElem.innerHTML = dataFormatada;

const getTransaction = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const response = await fetch(`http://localhost:3000/transaction/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    console.log(data);
};

getTransaction();
