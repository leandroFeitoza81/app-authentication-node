'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Chris',
        last_name: 'Cornell',
        username: 'c.cornell',
        password: 'senha123',
      },
      {
        name: 'Charlie',
        last_name: 'Watts',
        username: 'c.watts',
        password: 'senha123',
      },
      {
        name: 'Ian',
        last_name: 'Curtis',
        username: 'i.curtis',
        password: 'senha123',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
