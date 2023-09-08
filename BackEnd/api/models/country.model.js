const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');


var Country = database.define('country', {
 id: { 
    type: DataTypes.INTEGER,
    autoIncrement: true, 
    primaryKey: true 
},
 country: { 
    type: DataTypes.TEXT, 
    allowNull: false 
},
}, {freezeTableName: true, timestamps: false});



module.exports.Country = Country;
