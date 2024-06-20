"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John",
          lastName: 'Doe',
          email: '123@123',
          password: '123',
          isAdmin: false,
        },
        {
          name: "Chris",
          lastName: 'Suck',
          email: '1232@123',
          password: '123',
          isAdmin: false,
        },
        {
          name: "Bob",
          lastName: 'Vob',
          email: '123@1223',
          password: '123',
          isAdmin: false,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
