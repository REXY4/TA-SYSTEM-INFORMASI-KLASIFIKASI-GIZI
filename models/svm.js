'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Svm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Svm.init({
    nama: DataTypes.STRING,
    gender: DataTypes.STRING,
    usia: DataTypes.INTEGER,
    berat: DataTypes.FLOAT,
    tinggi: DataTypes.FLOAT,
    klasifikasi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Svm',
  });
  return Svm;
};