const Sequelize = require("sequelize");

const sequelize = new Sequelize("bookly", "root", "0410M!123@", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
