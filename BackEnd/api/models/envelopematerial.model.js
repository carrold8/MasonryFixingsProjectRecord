const database = require('../../config/database').database;
const {  DataTypes, EagerLoadingError } = require('sequelize');


var EnvelopeMaterial = database.define('envelope_material', {
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



module.exports.EnvelopeMaterial = EnvelopeMaterial;
