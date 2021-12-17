const sequelize = require('./sequ');
var Sequelize = require('sequelize');

const Tickets = sequelize.define('tickets', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING(255), allowNull: false },
    description: { type: Sequelize.STRING(255), allowNull: false },
    nbLefts: { type: Sequelize.INTEGER, defaultValue: 10 },
    urlImage: { type: Sequelize.STRING(255), allowNull: false }
},
    { tableName: 'tickets', timestamps: false, underscored: true }
);

const Credentials = sequelize.define('creds', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    username: { type: Sequelize.STRING(255), allowNull: false },
    password: { type: Sequelize.STRING(255), allowNull: false }
},
    { tableName: 'creds', timestamps: false, underscored: true });

sequelize.sync().then(async (val) => {
    var creds = val.models.creds;
    var tickets = val.models.tickets
    await creds.findAll().then((tab) => {
        if (tab.length == 0) {
            creds.create({
                username: 'Admin',
                password: 'Passw0rd'
            })
        } else {
            console.log("Not empty !");
        }
    });
    await tickets.findAll().then((tab) => {
        if (tab.length == 0) {
            ticks.forEach((tick) => {
                tickets.create({
                    name: tick.name,
                    description: tick.description,
                    nbLefts: tick.nbLefts,
                    urlImage: tick.urlImage
                })
            });
        } else {
            console.log("Tick is Not empty !");
        }
    })
});

module.exports.Tickets = Tickets;
module.exports.Credentials = Credentials;
