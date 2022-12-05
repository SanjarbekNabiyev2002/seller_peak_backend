'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('role', { 
      id: {
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: false,
        unique: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('role');
  }
};
