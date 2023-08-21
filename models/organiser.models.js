
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Organiser = sequelize.define('organiser', {
    name: Sequelize.STRING,
    phone: Sequelize.STRING,
    email: Sequelize.STRING
});


module.exports = Organiser;