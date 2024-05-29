const prisma = require('../dao/prisma');

const login = async (req, res) => {
    const { cpf, senha } = req.body;
    console.log(req.body);

    const cliente = await prisma.cliente.findUnique({
        where: {
            cpf
        },
    })

    if (cliente) {
        if (cliente.senha === senha) {
            res.status(200).json(cliente).end();
        } else {
            res.status(400).json({ erro: "Senha incorreta" }).end();
        }
    }
    else {
        res.status(400).json({ erro: "Cliente não encontrado" }).end();
    }

}
const listardados = async (req, res) => {

    const clientes = await prisma.cliente.findMany();

    if (clientes) {
        res.status(200).json(clientes).end();
    }
    else {
        res.status(400).json({ erro: "Clientes não encontrados" }).end();
    }
}


module.exports = {
    login,
    listardados,
}

//200-deu certo 201 - criou  202- aceito 400-erro 404- não encontrado 500-erro mto grave- tabela http