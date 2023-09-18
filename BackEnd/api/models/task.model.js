const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');
const { Stage } = require('./stage.model');


var Task = database.define('task', {
 id: { 
    type: DataTypes.INTEGER,
    autoIncrement: true, 
    primaryKey: true 
},
 name: { 
    type: DataTypes.TEXT, 
    allowNull: false 
},
stage_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
}, {freezeTableName: true, timestamps: false});

Task.belongsTo(Stage, {foreignKey: 'stage_id'});

module.exports.Task = Task;