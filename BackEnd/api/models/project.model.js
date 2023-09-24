const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');



var Project = database.define('project', {
 id: { 
    type: DataTypes.INTEGER,
    autoIncrement: true, 
    primaryKey: true 
},
 name: { 
    type: DataTypes.TEXT, 
    allowNull: false 
},
cis_id: { 
    type: DataTypes.TEXT, 
    allowNull: false 
},

}, {freezeTableName: true, timestamps: false});

module.exports.Project = Project;