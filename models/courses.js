var Sequelize = require('sequelize');
var sequelize = require('../config/connectiondb.js');

const Course = sequelize.define('courses', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    }
});

module.exports = Course;
