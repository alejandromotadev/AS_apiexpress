const mysql = require('../database/mysql')
const Product = require('../entities/Product')

class ProductsRepository {

  async getAll() {
    const sql = 'SELECT * FROM products';
    const rows = await mysql.query(sql);
    console.log('=>',rows)
    return rows.map(row => new Product(
      row.id,
      row.nombre,
      row.descripcion,
      row.precio
    ));
  }

  async create(product) {
    const sql = 'INSERT INTO products (nombre, descripcion, precio) VALUES (?, ?, ?)';
    const params = [producto.nombre, producto.descripcion, producto.precio];

    const result = await db.query(sql, params);
    producto.id = result.insertId;

    return product;
  }
}

module.exports = ProductsRepository;

