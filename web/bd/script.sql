-- SQL do banco de dados de Tarefas a fazer
DROP DATABASE IF EXISTS bank;
CREATE DATABASE bank;
USE bank;
-- DDL Criação da estrutura da tabela
CREATE TABLE cliente(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    telefone VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    senha VARCHAR(30) NOT NULL,
    saldo FLOAT NOT NULL,
    limite FLOAT NOT NULL
);


INSERT INTO cliente VALUES ("", "larissa", "19997758097","larissa.carrara@hotmail.com","527000654", "12345", 2000,600);
