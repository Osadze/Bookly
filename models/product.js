const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  img: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;


// const db = require("../util/database");

// const Cart = require("./cart");

// module.exports = class Product {
//   constructor(id, title, description, price, img) {
//     this.id = id;
//     this.title = title;
//     this.description = description;
//     this.price = price;
//     this.img = img;
//   }

//   save() {
//     return db.execute(
//       "INSERT INTO products (title, description, price, imageUrl) VALUES (?,?,?,?)",
//       [this.title, this.description, this.price, this.img]
//     );
//   }

//   static deleteById(id) {}

//   static fetchAll() {
//     return db.execute("SELECT * FROM products");
//   }

//   static findById(id) {
//     return db.execute('SELECT * FROM products WHERE products.id = ?', [id])
//   }
// };
