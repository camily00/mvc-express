const { DataTypes } = require('sequelize');
const DB = require("../db");

const livros = DB.define('livros',{

  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ano: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = livros;