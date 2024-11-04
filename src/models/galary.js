'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Galary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
 
  Galary.init({
    image: DataTypes.BLOB('long'),
    productId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Galary',
  });
  return Galary;
};