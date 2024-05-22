// postgres://sistema_bancario_user:VfFyWaMHRJrBgQqu1nSj5lyIOLRgqHeI@dpg-cp781eu3e1ms73ag6jg0-a.oregon-postgres.render.com/sistema_bancario

const { Client } = require("pg")

const con = new Client({
  user: 'sistema_bancario_user',
  password: 'sVfFyWaMHRJrBgQqu1nSj5lyIOLRgqHeI',
  host: 'dpg-cp781eu3e1ms73ag6jg0-a.oregon-postgres.render.com',
  port: 5432,
  database: 'sistema_bancario',
})

con.connect()

module.exports = con;