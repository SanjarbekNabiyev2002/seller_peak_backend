'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('prixod_table', {
      id: {
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      prixod_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'prixod',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
      },
      shtrix: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
      product: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
      qoldiq: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
      soni: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      narxYetkazuvchi: {
        type: Sequelize.DataTypes.DECIMAL(17, 3),
        allowNull: false,
      },
      summaYetkazuvchi: {
        type: Sequelize.DataTypes.DECIMAL(17, 3),
        allowNull: false,
      },
      narxKirim: {
        type: Sequelize.DataTypes.DECIMAL(17, 3),
        allowNull: false,
      },
      summaKirim: {
        type: Sequelize.DataTypes.DECIMAL(17, 3),
        allowNull: false,
      },
      chakanaFoiz: {
        type: Sequelize.DataTypes.DECIMAL(17, 3),
        allowNull: true,
      },
      chakanaNarx: {
        type: Sequelize.DataTypes.DECIMAL(17, 3),
        allowNull: true,
      },
      ulgurjiFoiz: {
        type: Sequelize.DataTypes.DECIMAL(17, 3),
        allowNull: true,
      },
      ulgurjiNarx: {
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
    },

    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('prixod_table');
  }
};
