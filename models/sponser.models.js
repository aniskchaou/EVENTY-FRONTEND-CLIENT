
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Sponser = sequelize.define('sponser', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    website: Sequelize.STRING,
    telephone: Sequelize.STRING
});


module.exports = Sponser;