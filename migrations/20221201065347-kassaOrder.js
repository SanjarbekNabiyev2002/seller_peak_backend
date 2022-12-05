'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('kassaOrder', { 
      id: {
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      fakt: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
      },
      vaqt: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      sklad_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'sklad',
          key: 'id'
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
      },
      summaUZB: {
        type: Sequelize.DataTypes.DECIMAL(17, 3),
        allowNull: true
      },
      summaUSD: {
        type: Sequelize.DataTypes.DECIMAL(17, 3),
        allowNull: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('kassaOrder');
  }
};
