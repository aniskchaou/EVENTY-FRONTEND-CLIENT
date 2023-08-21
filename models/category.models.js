
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Category = sequelize.define('category', {
    name: Sequelize.STRING,
    description: Sequelize.STRING
});


module.exports = Category;