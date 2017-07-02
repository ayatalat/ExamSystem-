var Sequelize = require('sequelize');
var sequelize = require('../config/connectiondb.js');

const Question = sequelize.define('Questions', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    objective: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    degrees: {
        type: Sequelize.INTEGER,
        defaultValue: 10
    },
    chapter_id: {
        type: Sequelize.INTEGER
    },
    answers: {
        type: Sequelize.JSON
    }
});

module.exports = Question;
