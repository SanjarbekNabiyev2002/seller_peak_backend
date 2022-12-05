'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert('payType', [
      {
        name: 'Naqd'
      },
      {
        name: 'Dollar'
      },
      {
        name: 'Plastik'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('payType', null, {});
  }
};
