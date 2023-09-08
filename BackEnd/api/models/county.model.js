const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');


var County = database.define('county', {
 id: { 
    type: DataTypes.INTEGER,
    autoIncrement: true, 
    primaryKey: true 
},
 county: { 
    type: DataTypes.TEXT, 
    allowNull: false 
},
}, {freezeTableName: true, timestamps: false});



module.exports.County = County;
