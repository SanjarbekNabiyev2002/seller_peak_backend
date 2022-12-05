'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('prixod', {
      id: {
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      fakt: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      vaqt: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
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
      yetkazuvchi_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'yetkazuvchi',
          key: 'id'
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
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
      soni: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      summa: {
        type: Sequelize.DataTypes.DECIMAL(17, 3),
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE
      },
      deletedAt: {
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('prixod');
  }
};
