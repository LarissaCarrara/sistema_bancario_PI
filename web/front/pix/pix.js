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
