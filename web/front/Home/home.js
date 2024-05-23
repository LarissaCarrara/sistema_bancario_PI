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


    const urlProd = "https://sistema-bancario-pi.onrender.com/listardados"
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




                    //                     const pdetalhes = document.createElement("p");
                    //                     pdetalhes.innerHTML = element.descricao;
                    //                     pdetalhes.className = "pdetalhes"




                    //                     div.appendChild(pnome);
                    //                     div.appendChild(pdetalhes); 
                    //                     section.appendChild(div)

                    //                     // const pdescricao = document.createElement("td");
                    //                     // pdescricao.innerHTML = element.descricao;
                    //                     // pdescricao.className="t";


                    //                     // const ppreco = document.createElement("td");
                    //                     // ppreco.innerHTML = element.valor;
                    //                     // ppreco.classList="t";




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
// }//fecha carregadados
// function cadastrar() {

//     const nova_atividade = document.querySelector("#novatividade").value;
//     const nova_descricao = document.querySelector("#novadescricao").value;

//     const dadoscadastrar = {
//         "nome": nova_atividade,
//         "descricao": nova_descricao,
//         "id": dadosArmazenados.idsala
//     }

//     console.log(dadoscadastrar)

//     fetch('http://localhost:3000/cadastraratividade',
//         {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(dadoscadastrar)
//         }).then(resp => {
//             return resp.status;
//         })
//         .then(data => {
//             if (data == 202) {
//                 console.log(data);

//                 alert("Atividade criada com sucesso");
//                 window.location.reload()

//                 //window.location.href = "./home.html";
//                 // window.location.href = `./cardapio.html?id=${id}`;
//             } else {
//                 alert('atividade não criada')
//             }
//         })




function voltar() {
    window.location.href = "./home.html"
}

function exibirModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function fecharModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}