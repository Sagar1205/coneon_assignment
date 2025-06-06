import dotenv from "dotenv";
dotenv.config();

import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PWD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
    logging: false,
  }
);

console.log(process.env.DB_HOST);
console.log(process.env.DB);
console.log(process.env.DB_USER);
console.log(process.env.DB_PWD);
console.log(process.env.DB_PORT);

export default sequelize;
