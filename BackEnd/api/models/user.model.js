const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');



var User = database.define('user', {
 id: { 
    type: DataTypes.INTEGER,
    autoIncrement: true, 
    primaryKey: true 
},
 name: { 
    type: DataTypes.TEXT, 
    allowNull: false 
},

}, {freezeTableName: true, timestamps: false});

module.exports.User = User;