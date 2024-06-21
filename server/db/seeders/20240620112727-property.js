"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Properties",
      [
        {
          propertyCategoryId: 1,
          title: 'Аппартаменты "Престиж"',
          price: 10000,
          description: "Звонить по номеру 899999999",
          photo: "img/appart.jpeg",
        },
        {
          propertyCategoryId: 2,
          title: 'Дом "Мечта у моря"',
          price: 10000,
          description: "Звонить по номеру 8-999-999-00-00",
          photo: "img/dom.png",
        },
        {
          propertyCategoryId: 3,
          title: "Квартира в Мурино",
          price: 15000,
          description: "Звонить по номеру 8-914-232-33-02",
          photo: "img/kvartira.webp",
        },
        {
          propertyCategoryId: 2,
          title: 'Аппартаменты "БАЛДЕЖ"',
          price: 150000,
          description:
            "Звонить по номеру 8-999-234-50-1, но не хватит деняк",
          photo: "img/appartement2.jpeg",
        },
        {
          propertyCategoryId: 3,
          title: 'Дом "Теплота и уют"',
          price: 40000,
          description: "Звонить по номеру 8-800-555-35-35",
          photo: "img/house.jpeg",
        },
        {
          propertyCategoryId: 1,
          title: "10-комнатная Вилла",
          price: 500000,
          description: "Звонить только сеньорам",
          photo: "img/villa.jpeg",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Properties", null, {});
  },
};
