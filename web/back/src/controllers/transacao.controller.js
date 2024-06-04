const prisma = require("../dao/prisma");

const getAllTransactions = async (req, res) => {
  try {
    const transactions = await prisma.transacao.findMany({
      include: {
        cliente: true,
      },
    });

    res.status(200).json({ data: transactions });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTransaction = async (req, res) => {
  try {
    const { clienteId, valor, tipo, descricao } = req.body;
    console.log(clienteId, valor, tipo, descricao);

    const transaction = await prisma.transacao.create({
      data: {
        clienteId,
        valor,
        tipo,
        descricao,
      },
    });

    res.status(201).json({
      data: transaction,
      message: "Transação criada com sucesso",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTransactionById = async (req, res) => {
  try {
    const { id } = req.params;

    console.log(id);

    const transaction = await prisma.transacao.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        cliente: true,
      },
    });

    res.status(200).json({ data: transaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const alterarSaldo = async (req, res) => {
  try {
    const { idQuemEnvia, idQuemRecebe, valor } = req.body;

    console.log(req.body);

    const valorFormatado = parseFloat(valor);

    const quemEnvia = await prisma.cliente.update({
      where: {
        id: parseInt(idQuemEnvia),
      },
      data: {
        saldo: {
          decrement: valorFormatado,
        },
      },
    });

    const quemRecebe = await prisma.cliente.update({
      where: {
        id: parseInt(idQuemRecebe),
      },
      data: {
        saldo: {
          increment: valorFormatado,
        },
      },
    });

    return res.status(200).json({
      data: {
        quemEnvia,
        quemRecebe,
      },
      message: "Saldo alterado com sucesso",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTransaction,
  getTransactionById,
  alterarSaldo,
  getAllTransactions
};
