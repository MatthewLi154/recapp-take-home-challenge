'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('coffees', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.VARCHAR(50),
        allowNull: false,
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      caffine_content: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      caffine_percentage: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATETIME
      },
      updatedAt: {
        type: Sequelize.DATETIME
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("coffees")
  }
};
