// const { url } = require("inspector");

const saldo__valor = document.querySelector(".saldo__reais");
const input = document.querySelector(".pix__dinheiro");


const cpfPix = document.querySelector('#cpfPix');

function fazerPix() {
    console.log("entrei")
    cpf = String(cpfPix.value) 
    console.log(typeof cpf)
    console.log(cpf)
    const urlProd = "https://sistema-bancario-pi.onrender.com/listardados/" + cpf;
    console.log(urlProd)
    fetch(urlProd)
    .then(response => response.json())
    .then(data => {

        console.log(data)
        if (data.erro != "Cliente não encontrado") {
            console.log('CPF válido');
            window.location.href = "./pagamento.html";
        } else {
            console.log('CPF inválido');
        }   
    })
    .catch(error => console.error('Erro:', error));
}

document.addEventListener('DOMContentLoaded', (event) => {
    const pagarScreen = document.querySelector('.pix__pagar');
    const receberScreen = document.querySelector('.pix__receber');

    pagarScreen.style.cursor = 'pointer';
    pagarScreen.addEventListener('click', () => {
        window.location.href = './pagar.html';
    });

    receberScreen.style.cursor = 'pointer';
    receberScreen.addEventListener('click', () => {
        window.location.href = './receber.html';
    });
});

function ocultar() {
    saldo__valor.classList.toggle('sumir')
}

function resizeInput(input) {
    const minWidth = 70; // Minimum width in pixels
    const characterWidth = 10; // Approximate width of a character in pixels

    // Calculate the new width based on input length
    const newWidth = minWidth + (input.value.length * characterWidth);
    input.style.width = newWidth + "px";
}