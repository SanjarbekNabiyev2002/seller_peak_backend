'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('yetkazuvchi', { 
      id: {
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      fullname: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('yetkazuvchi');
  }
};
