var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres', 'postgres', 'Passw0rd', {
    host: 'localhost',
    dialect: 'postgres',
    logging: console.log,//passer a true pour voir les différentes requêtes effectuées par l'ORM
});
//on exporte pour utiliser notre connexion depuis les autre fichiers.

module.exports = sequelize;