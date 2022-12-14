const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, description, price, imgUrl) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.img = imgUrl;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        // console.log(err);
      });
    });
    fs.readFile(p, (err, fileContent) => {});
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
