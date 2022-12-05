'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('role', [
      {
        name: 'Admin',
      },
      {
        name: 'User',
      },
      {
        name: 'Programmer',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('role', null, {});

  }
};
