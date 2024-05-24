const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "renzo",
  host: "localhost",
  port: "5432",
  database: "platillos",
});

module.exports = pool;
 