const db = require('../util/database')

const Cart = require("./cart");

module.exports = class Product {
  constructor(id, img, title, description, price) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.description = description;
    this.price = price;
  }

  save() {
  }

  static deleteById(id) {
    
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {

  }}
