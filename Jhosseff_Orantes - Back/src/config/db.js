const mysql = require("mysql2/promise");

// Conexión a la base de datos
const pool = mysql.createPool({
  host: "localhost",
  user: "root", 
  password: "", 
  database: "evaluacion_jhosseff_orantes", 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
