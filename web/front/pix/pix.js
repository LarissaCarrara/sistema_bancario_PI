// const { url } = require("inspector");

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
