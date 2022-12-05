'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('product', { 
      id: {
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
        unique: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('product');
  }
};
