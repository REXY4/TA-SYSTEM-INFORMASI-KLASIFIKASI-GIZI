'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Knn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Knn.init({
    nama: DataTypes.STRING,
    gender: DataTypes.STRING,
    usia: DataTypes.INTEGER,
    berat: DataTypes.FLOAT,
    tinggi: DataTypes.FLOAT,
    klasifikasi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Knn',
  });
  return Knn;
};