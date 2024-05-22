DROP DATABASE IF EXISTS bank;  -- Drop the database if it already exists

CREATE DATABASE bank;        -- Create the database named "bank"

\connect bank;                 -- Connect to the newly created database (optional, depends on your tool)

-- DDL (Data Definition Language) for the "cliente" table
CREATE TABLE cliente (
  id SERIAL PRIMARY KEY,        -- Use SERIAL instead of AUTO_INCREMENT for auto-incrementing integer
  nome VARCHAR(50) NOT NULL,
  telefone VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  cpf VARCHAR(11) NOT NULL UNIQUE, -- Add UNIQUE constraint to enforce unique CPFs
  senha VARCHAR(30) NOT NULL,
  saldo DECIMAL(10,2) NOT NULL,  -- Use DECIMAL for monetary values with precision
  limite DECIMAL(10,2) NOT NULL   -- Use DECIMAL for monetary values with precision
);

-- Insert data into the "cliente" table (assuming an empty string for nome)
INSERT INTO cliente (nome, telefone, email, cpf, senha, saldo, limite)
VALUES ('', '19997758097', 'larissa.carrara@hotmail.com', '527000654', '12345', 2000.00, 600.00);
