var Sequelize = require('sequelize');
var sequelize = require('../config/connectiondb.js');

const chapter = sequelize.define('chapters', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    c_id: {
        type: Sequelize.INTEGER
    }
});
module.exports = chapter;
