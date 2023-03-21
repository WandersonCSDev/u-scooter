const Sequelize = require('sequelize'); // Import sequelize entry point "S"

const dotenv = require('dotenv/config'); // Apesar de não ser usado, é a chave do db.

// Variáveis guardam as infos do host:

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

//Definições do Squelize

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: 'mysql',
  host: dbHost,
  define: {
    timestamp: true,
    underscored: true,
  },
});

module.exports = sequelize;
