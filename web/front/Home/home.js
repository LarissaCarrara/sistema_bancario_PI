const section = document.querySelector("section");
const body = document.querySelector("body");

const saudacoes = document.querySelector(".saudacoes");
const header = document.querySelector("header");
const saudacoes__texto = document.querySelector(".saudacoes__texto");
const saudacoes__titulo = document.querySelector(".saudacoes__titulo");
const imagem__tit = document.querySelector(".imagem__tit");
const saldo = document.querySelector(".saldo");
const saldo__valor = document.querySelector(".saldo__valor");
const saldo__container = document.querySelector(".saldo__container");
const icone__olho = document.querySelector(".icone__olho");
const creditcard = document.querySelector(".creditcard");
const cartao__nome = document.querySelector(".cartao__nome")
const cartao__conteudo = document.querySelector(".cartao__conteudo");

function carregardados() {
    const cpf = localStorage.getItem('cpf');
    console.log(cpf);

    const urlProd = "https://sistema-bancario-pi.onrender.com/listardados/" + cpf;
    console.log(urlProd);
    fetch(urlProd)
        .then(resp => resp.json())
        .then(data => {
            if (data) {  // Verifica se data não é nulo ou indefinido
                console.log(data);

                // Verifica se data é um array
                if (Array.isArray(data)) {
                    data.forEach(element => {
                        console.log(element);
                        saudacoes__titulo.innerHTML += element.nome;
                        saldo__valor.innerHTML += element.saldo;
                        cartao__nome.innerHTML += element.nome;

                        saudacoes__texto.appendChild(saudacoes__titulo);
                        saudacoes.appendChild(saudacoes__texto);
                        cartao__conteudo.appendChild(cartao__nome);
                        saudacoes.appendChild(imagem__tit);
                        header.appendChild(saudacoes);
                        saldo__container.appendChild(saldo__valor);
                        saldo.appendChild(saldo__container);
                        saldo.appendChild(icone__olho);
                        body.appendChild(header);
                        body.appendChild(saldo);
                        body.appendChild(creditcard);
                    });
                } else {
                    // Se data não é um array, trata-o como um objeto único
                    console.log(data);
                    saudacoes__titulo.innerHTML += data.nome;
                    saldo__valor.innerHTML += data.saldo;
                    cartao__nome.innerHTML += data.nome

                    saudacoes__texto.appendChild(saudacoes__titulo);
                    saudacoes.appendChild(saudacoes__texto);
                    cartao__conteudo.appendChild(cartao__nome);
                    saudacoes.appendChild(imagem__tit);
                    header.appendChild(saudacoes);
                    saldo__container.appendChild(saldo__valor);
                    saldo.appendChild(saldo__container);
                    saldo.appendChild(icone__olho);
                    body.appendChild(header);
                    body.appendChild(saldo);
                    body.appendChild(creditcard);
                }
            }
        })
        .catch(error => {
            console.error("Erro ao buscar dados:", error);
        });
}


function ocultar() {
    saldo__valor.classList.toggle('sumir')
}

function pix(){
    window.location.href = "../pix/pix.html"
}
// function voltar() {
//     window.location.href = "./home.html"
// }

