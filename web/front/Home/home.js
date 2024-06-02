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

    cpf = localStorage.getItem('cpf');
    console.log(cpf)

    const urlProd = "https://sistema-bancario-pi.onrender.com/listardados/" + cpf
    console.log(urlProd)
    fetch(urlProd).then(resp => resp.json())
        .then(data => {
            if (data != undefined) {
                data.forEach(element => {
                    console.log(element);

                    saudacoes__titulo.innerHTML += element.nome
                    saldo__valor.innerHTML += element.saldo
                    //                     const div = document.createElement("div");

                    //                     div.className = "card";
                    //                     const pnome = document.createElement("p")
                    //                     pnome.className = "nome"
                    //                     pnome.innerHTML = element.nome;


                    saudacoes__texto.appendChild(saudacoes__titulo);
                    //                     // tr.appendChild(ppreco);


                    saudacoes.appendChild(saudacoes__texto);
                    saudacoes.appendChild(imagem__tit);
                    header.appendChild(saudacoes);
                    saldo__container.appendChild(saldo__valor);
                    saldo.appendChild(saldo__container);
                    saldo.appendChild(icone__olho);

                    body.appendChild(header);
                    body.appendChild(saldo);
                    body.appendChild(creditcard);



                })
            }
        })
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

