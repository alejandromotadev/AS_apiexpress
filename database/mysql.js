const mysql = require('mysql2/promise')

const config = {
    host : 'localhost',
    user : 'alilopez',
    database: 'producto',
    password: '123456',
};



// conn.connect(function(err) {
//     if (err) throw err;
//     console.log('Conexión a la base de datos exitosa!');
// });


module.exports = {
  query: async (sql, params) => {
      console.log('Mysql')
      //const conn = await pool.getConnection();
      // console.log('Superado Mysql')
      const conn = await mysql.createConnection(config);
      try {
        const [result] =  await conn.execute(sql, params);
        return result;
      } finally {
        console.log('Todo ok')
      }
  }
};
