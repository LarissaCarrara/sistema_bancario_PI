const cpfPix = document.getElementById('cpfPix');

const urlDev = "http://localhost:3000/login";
const urlProd = "https://sistema-bancario-pi.onrender.com/login";

function fazerPix() {
    const chave = { cpf: cpfPix.value };

    fetch(urlDev, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(chave)
    })
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