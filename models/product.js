const fs = require("fs");
const pathh = require("path");

const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
  }

  static fetchAll() {
    return products;
  }
};
