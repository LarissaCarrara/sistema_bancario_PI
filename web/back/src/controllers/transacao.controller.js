const prisma = require('../dao/prisma');

const createTransaction = async (req, res) => {

    try {
        const { clienteId, valor, tipo,descricao} = req.body;

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

        const transaction = await prisma.transacao.findUnique({
            where: {
                id: parseInt(id)
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createTransaction,
    getTransactionById
}