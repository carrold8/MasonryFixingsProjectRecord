const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');
const { Category } = require('./category.model');


var Sector = database.define('sector', {
 id: { 
    type: DataTypes.INTEGER,
    autoIncrement: true, 
    primaryKey: true 
},
 name: { 
    type: DataTypes.TEXT, 
    allowNull: false 
},
category_id: {
    type: DataTypes.INTEGER,
    allowNull: false
}
}, {freezeTableName: true, timestamps: false});

Sector.belongsTo(Category, {foreignKey: 'category_id'});


module.exports.Sector = Sector;
