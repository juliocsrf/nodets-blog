'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('categories', 
        [
            {
                title: 'Test Category',
                slug: 'test-category'
            }
        ]
    );

    await queryInterface.bulkInsert('articles', 
        [
            {
                title: 'Test Article',
                slug: 'test-article',
                body: 'This is a article test',
                id_category: 1
            }
        ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
