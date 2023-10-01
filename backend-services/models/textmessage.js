'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class textMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  textMessage.init({
    message: DataTypes.STRING,
    dateSent: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'textMessage',
  });
  return textMessage;
};