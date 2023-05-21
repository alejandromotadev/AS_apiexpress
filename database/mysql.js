const mysql = require('mysql2/promise')
require("dotenv").config();

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
};

// conn.connect(function(err) {
//     if (err) throw err;
//     console.log('Conexión a la base de datos exitosa!');
// });

module.exports = {
  query: async (sql, params) => {
      console.log('Mysql')
      const conn = await mysql.createConnection(config);
      try {
        const [result] =  await conn.execute(sql, params);
        return result;
      } finally {
        console.log('Todo ok')
      }
  }
};
