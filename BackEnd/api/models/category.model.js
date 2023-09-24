const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');


var Category = database.define('category', {
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



module.exports.Category = Category;
