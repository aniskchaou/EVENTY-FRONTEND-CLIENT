
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Booking = sequelize.define('booking', {
    event: Sequelize.STRING,
    user: Sequelize.STRING,
    payment: Sequelize.STRING
});


module.exports = Booking;