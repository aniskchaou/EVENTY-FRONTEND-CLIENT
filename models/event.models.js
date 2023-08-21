
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Event = sequelize.define('event', {
    name: Sequelize.STRING,
    category: Sequelize.STRING,
    organiser: Sequelize.STRING,
    date: Sequelize.STRING,
    start: Sequelize.STRING,
    end: Sequelize.STRING,
    sponsor: Sequelize.STRING,
    price: Sequelize.STRING,
    max: Sequelize.STRING,
    description: Sequelize.STRING,
    status: Sequelize.STRING
});


module.exports = Event;