'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('kassaOrder_table', {
      id: {
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      kassaOrder_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'kassaOrder',
          key: 'id'
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
      },
      base_text: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },
      payType_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'payType',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
      },
      type_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'type',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
      },
      summa: {
        type: Sequelize.DataTypes.DECIMAL(17, 3),
        allowNull: true,
      },
      comment: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: true,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('kassaOrder_table');
  }
};
