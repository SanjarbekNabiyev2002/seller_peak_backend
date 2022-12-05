'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('type', {
      id: {
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: false,
      } 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('type');
  }
};
