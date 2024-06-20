"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Properties",
      [
        {
          propertyCategoryId: 1,
          title: '1-комнатные Аппартаменты',
          price: 10000,
          description: 'Звонить по номеру 899999999', 
          photo: 'url',
        },
        {
          propertyCategoryId: 2,
          title: '2х-комнатный Дом',
          price: 10000,
          description: 'Звонить по номеру 899999999', 
          photo: 'url',
        },
        {
          propertyCategoryId: 3,
          title: '2х-комнатная Квартира',
          price: 10000,
          description: 'Звонить по номеру 899999999', 
          photo: 'url',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Properties", null, {});
  },
};