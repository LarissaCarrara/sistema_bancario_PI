const cpf = document.querySelector("#cpf");
const senha = document.querySelector("#senha");


const urlDev = "http://localhost:3000/login";

const urlProd = "https://sistema-bancario-pi.onrender.com/login";

function entrar(){
    const usuario = {
        "cpf": cpf.value,
        "senha": senha.value
    }
    console.log(usuario);

    fetch(urlProd, 
    {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(usuario)
    }) .then(resp => resp.json())
    .then(data => {
        console.log(data);
        if (data != null) {
            alert("Seja Bem-vindo!")
            console.log(data);
            localStorage.setItem('user-safebank', JSON.stringify(data));
            window.location.href = "./Home";
        }else{
            alert("Usuário ou senha inválidos")
        }
    })
}
