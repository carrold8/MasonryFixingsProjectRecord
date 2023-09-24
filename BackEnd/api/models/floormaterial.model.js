const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');


var FloorMaterial = database.define('floor_material', {
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



module.exports.FloorMaterial = FloorMaterial;
