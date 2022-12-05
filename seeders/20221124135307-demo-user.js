'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('user', [{
      username: 'Admin',
      password: '$2a$08$YLZ7gtHc5KgiF3TlX/12r.boof4dIvGSoViUYxaRL8f7yHhKjPh0i', 
      fullname: 'Admin',  
      role_id: 1,
      deletedAt: null
    }], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('user', null, {});
  }
};
