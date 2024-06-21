"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "PropertyCategories",
      [
        {
          title:'Аппартаменты'
        },
        {
          title: 'Дом'
        },
        {
          title: 'Квартира'
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("PropertyCategories", null, {});
  },
};
