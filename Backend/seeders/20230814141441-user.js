"use strict";
const hashHelper = require(process.cwd() + "/helpers/password-encrypter");
require("dotenv").config();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Nguyen Duc Phu",
          gender: "Male",
          birthday: "2003-01-01",
          email: "phunguyenduc99@gmail.com",
          telephone: "0973755062",
          address: "Number 1 in your heart",
          avatar_url:
            process.env.WEB_URL + "/images/avatars/default-avatar.png",
          password: hashHelper.hash("admin"),
          isAdmin: true,
        },
        {
          name: "Alice",
          gender: "Female",
          birthday: "2000-05-15",
          email: "alice@example.com",
          telephone: "1234567890",
          address: "123 Main St",
          avatar_url:
            process.env.WEB_URL + "/images/avatars/default-avatar.png",
          password: hashHelper.hash("user12345"),
          isAdmin: false,
        },
        {
          name: "Bob",
          gender: "Male",
          birthday: "1995-09-20",
          email: "bob@example.com",
          telephone: "9876543210",
          address: "456 Elm St",
          avatar_url:
            process.env.WEB_URL + "/images/avatars/default-avatar.png",
          password: hashHelper.hash("user12345"),
          isAdmin: false,
        },
        {
          name: "Emily",
          gender: "Female",
          birthday: "1998-12-10",
          email: "emily@example.com",
          telephone: "8765432109",
          address: "789 Oak St",
          avatar_url:
            process.env.WEB_URL + "/images/avatars/default-avatar.png",
          password: hashHelper.hash("user12345"),
          isAdmin: false,
        },
        {
          name: "David",
          gender: "Male",
          birthday: "1992-03-25",
          email: "david@example.com",
          telephone: "5678901234",
          address: "101 Pine St",
          avatar_url:
            process.env.WEB_URL + "/images/avatars/default-avatar.png",
          password: hashHelper.hash("user12345"),
          isAdmin: false,
        },
        {
          name: "Emma",
          gender: "Female",
          birthday: "1997-08-18",
          email: "emma@example.com",
          telephone: "5432109876",
          address: "222 Maple St",
          avatar_url:
            process.env.WEB_URL + "/images/avatars/default-avatar.png",
          password: hashHelper.hash("user12345"),
          isAdmin: false,
        },
        {
          name: "Michael",
          gender: "Male",
          birthday: "1989-06-12",
          email: "michael@example.com",
          telephone: "9876123450",
          address: "333 Cedar St",
          avatar_url:
            process.env.WEB_URL + "/images/avatars/default-avatar.png",
          password: hashHelper.hash("user12345"),
          isAdmin: false,
        },
        {
          name: "Olivia",
          gender: "Female",
          birthday: "1995-04-05",
          email: "olivia@example.com",
          telephone: "4321098765",
          address: "444 Birch St",
          avatar_url:
            process.env.WEB_URL + "/images/avatars/default-avatar.png",
          password: hashHelper.hash("user12345"),
          isAdmin: false,
        },
        {
          name: "William",
          gender: "Male",
          birthday: "1990-09-28",
          email: "william@example.com",
          telephone: "8765432109",
          address: "555 Oak St",
          avatar_url:
            process.env.WEB_URL + "/images/avatars/default-avatar.png",
          password: hashHelper.hash("user12345"),
          isAdmin: false,
        },
        {
          name: "Sophia",
          gender: "Female",
          birthday: "1993-12-03",
          email: "sophia@example.com",
          telephone: "9876543210",
          address: "666 Elm St",
          avatar_url:
            process.env.WEB_URL + "/images/avatars/default-avatar.png",
          password: hashHelper.hash("user12345"),
          isAdmin: false,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
