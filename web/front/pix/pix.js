// const { url } = require("inspector");

const cpfPix = document.querySelector('#cpfPix');



function fazerPix() {
    console.log("entrei")
    console.log(cpfPix.value)
    cpf = cpfPix.value
    const urlProd = "https://sistema-bancario-pi.onrender.com/consultarPix/" + cpf;
    console.log(urlProd)
    fetch(urlProd)
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            console.log('CPF válido');
            window.location.href = "./Home";
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
