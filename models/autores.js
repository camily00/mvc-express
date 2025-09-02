const { DataTypes } = require('sequelize');
const DB = require('../db');

const autores = DB.define('autores', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nascimento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = autores;