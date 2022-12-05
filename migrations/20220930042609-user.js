'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      username: {
        type: Sequelize.DataTypes.STRING(25),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.DataTypes.STRING(60),
        allowNull: false
      },
      fullname: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
      },
      role_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'role',
          key: 'id'
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
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
    }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  }
};
