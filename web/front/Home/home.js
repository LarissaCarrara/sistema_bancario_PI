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

function carregardados() {
    const cpf = localStorage.getItem('cpf');
    console.log(cpf);

    const urlProd = "https://sistema-bancario-pi.onrender.com/listardados/" + cpf;
    console.log(urlProd);
    fetch(urlProd)
        .then(resp => resp.json())
        .then(data => {
<<<<<<< HEAD
            if (data) {  // Verifica se data não é nulo ou indefinido
                console.log(data);
=======
            console.log(data)
            if (Array.isArray(data)) {
                console.log(data);
                data.forEach(element => {
                    console.log(element);
>>>>>>> 06dffc70594f381ed98112f7904d0c9042f78346

                // Verifica se data é um array
                if (Array.isArray(data)) {
                    data.forEach(element => {
                        console.log(element);
                        saudacoes__titulo.innerHTML += element.nome;
                        saldo__valor.innerHTML += element.saldo;

                        saudacoes__texto.appendChild(saudacoes__titulo);
                        saudacoes.appendChild(saudacoes__texto);
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

                    saudacoes__texto.appendChild(saudacoes__titulo);
                    saudacoes.appendChild(saudacoes__texto);
                    saudacoes.appendChild(imagem__tit);
                    header.appendChild(saudacoes);
                    saldo__container.appendChild(saldo__valor);
                    saldo.appendChild(saldo__container);
                    saldo.appendChild(icone__olho);
                    body.appendChild(header);
                    body.appendChild(saldo);
                    body.appendChild(creditcard);
<<<<<<< HEAD
                }
=======



                })
            }else{
                console.log("deu erro")
>>>>>>> 06dffc70594f381ed98112f7904d0c9042f78346
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

