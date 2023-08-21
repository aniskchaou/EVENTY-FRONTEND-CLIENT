
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var User = sequelize.define('user', {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    telephone: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastNme: Sequelize.STRING,
    password: Sequelize.STRING
});


module.exports = User;