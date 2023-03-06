"use strict";

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Coffees",
      [
        {
          name: "French",
          year: 2014,
          caffine_content: parseFloat(60.8),
          caffine_percentage: parseFloat(69.8),
        },
        {
          name: "Dark",
          year: 2018,
          caffine_content: parseFloat(25.2),
          caffine_percentage: parseFloat(19.2),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Coffees", null, {});
  },
};
