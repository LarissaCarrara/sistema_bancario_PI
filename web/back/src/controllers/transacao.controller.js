const prisma = require('../dao/prisma');

const createTransaction = async (req, res) => {

    try {
        const { clienteId, valor, tipo,descricao} = req.body;

        console.log(clienteId, valor, tipo, descricao)

        const transaction = await prisma.transacao.create({
            data: {
                clienteId,
                valor,
                tipo,
                descricao
            }
        });

        res.status(201).json({
            data:transaction,
            message: 'Transação criada com sucesso'
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

const getTransactionById = async (req, res) => {
    try {
        const { id } = req.params;

        console.log(id)

        const transaction = await prisma.transacao.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                cliente: true
            }
        });

        res.status(200).json({ data: transaction });    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const alterarSaldo = async (req, res) => {
    try {
        const { idQuemEnvia,idQuemRecebe, valor } = req.body;

        console.log(id, valor)

            const quemEnvia = await prisma.cliente.update({
                where: {
                    id: parseInt(idQuemEnvia)
                },
                data: {
                    saldo: {
                        decrement: valor
                    }
                }
            });

            const quemRecebe = await prisma.cliente.update({
                where: {
                    id: parseInt(idQuemRecebe)
                },
                data: {
                    saldo: {
                        increment: valor
                    }
                }
            });

           
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createTransaction,
    getTransactionById,
    alterarSaldo
}